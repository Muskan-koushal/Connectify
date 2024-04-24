import { validationResult } from "express-validator";
import nodemailer from 'nodemailer';

import { User } from "../model/user.model.js";


import { OTP, storeOTP } from '../model/otp.model.js';

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signIn = async (request, response, next) => {
    try {
        let { email, password } = request.body;
        let user = await User.findOne({email});
        return user ?
            bcrypt.compareSync(password, user.password) ? response.status(200).json({ message: "Sign in successs", user: { ...user.toObject(), password: undefined }, token: generateToken(email) }) : response.status(401).json({ error: "Bad request", message: "Invalid password" })
            : response.status(401).json({ error: "Bad request", message: "Invalid email id" });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
export const signUp = async (request, response, next) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty())
            return response.status(401).json({ error: "Bad request", errorMessage: errors.array() });
        let password = request.body.password;
        let saltKey = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, saltKey);
        request.body.password = password;
        let result = await User.create(request.body);
        result = result.toObject();
        delete result.password;
        return response.status(200).json({ message: "Sign up success", user: result });
    }
    catch (err) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
}


// Function to generate OTP
const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); // OTP as string
};

// Function to send OTP to user's email
const sendOTPByEmail = async (email, otp) => {
    // Configure nodemailer with your email service
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'udaymourya08@gmail.com',
            pass: 'oged wgyf ddul zidk'
        }
    });

    // Email content
    let mailOptions = {
        from: 'udaymourya08@gmail.com',
        to: email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is: ${otp}`
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
};

// Route for handling forgot password request
export const forgotPassword = async (request, response) => {
    try {
        const { email } = request.body;
        
        // Generate OTP
        const otp = generateOTP();

        // Store OTP in the database
        await storeOTP(email, otp);

        
        await sendOTPByEmail(email, otp);
        return response.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        return response.status(500).json({ error: 'Internal Server Error' });
    }
};

export const resetPassword = async (request, response) => {
    try {
        const { email, otp, newPassword } = request.body;

        // Retrieve the stored OTP from the database based on user's email
        const storedOTP = await OTP.findOne({ email });
            console.log(storeOTP.otp);
        if (!storedOTP || storedOTP.otp !== otp) {
            return response.status(401).json({ error: 'Invalid OTP' });
        }

        //  new password ke liye h ye wala
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        //  user's password update karne ke liye h
        await User.updateOne({ email }, { password: hashedPassword });

        // Return success 
        return response.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        return response.status(500).json({ error: 'Internal Server Error' });
    }
};

// JWT token 
const generateToken = (email) => {
    let payload = { subject: email };
    return jwt.sign(payload, 'your-secret-key');
};


