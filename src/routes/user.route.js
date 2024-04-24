import express from "express";
import { signIn, signUp,forgotPassword ,resetPassword } from "../controller/user.controller.js";
import {body} from "express-validator";

const router = express.Router();
router.post("/signup",body("username","username is required").notEmpty(),
body("password","password is required").notEmpty(),
body("email","email is required").notEmpty(),
body("contact","contact is required").notEmpty(),signUp);
router.post("/signin",signIn);
router.post("/forgotPassword",forgotPassword);
router.post("/resetPassword",resetPassword);
export default router;