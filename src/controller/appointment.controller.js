import { Appointment } from "../model/appointmentCard.js";


export const createAppointmentProfile = async (req, res) => {
  try {
    const userData = req.body;

    if (!userData.userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const newAppointmentProfile = await Appointment.create(userData);
    return res.status(201).json({ message: "Appointment card created", user: newAppointmentProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


export const updateAppointmentProfile = async (req, res) => {
    try {
      const { appointmentId } = req.params.appointmentId;
      const updateData = req.body;
  
      const updatedAppointmentProfile = await Appointment.findByIdAndUpdate({_id:appointmentId}, updateData, { new: true });

      if (!updatedAppointmentProfile) {
        return res.status(404).json({ error: "Appointment profile not found" });
      }
  
      return res.status(200).json({ message: "Appointment profile updated", user: updateAppointmentProfile });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  
export const deleteAppointmentProfileField = async (req, res) => {
    try {
      const { appointmentId, fieldName } = req.params;
      const appointmentProfile = await Appointment.findById({_id:appointmentId});
      if (!appointmentProfile) {
        return res.status(404).json({ error: "Appointment profile not found" });
      }
      if (!appointmentProfile[fieldName]) {
        return res.status(404).json({ error: `Field '${fieldName}' not found in the Appointment profile` });
      }
      delete appointmentProfile[fieldName];
  
      // Save the updated dating profile
      await appointmentProfile.save();
  
      return res.status(200).json({ message: `Field '${fieldName}' Appointment from the Appointment profile` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };


  export const getAppointmentProfileByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Find the dating profile by user ID
      const appointmentProfile = await Appointment.findOne({ userId });
  
      // Check if the dating profile exists
      if (!appointmentProfile) {
        return res.status(404).json({ error: "Appointment profile not found for the user" });
      }
  
      return res.status(200).json({message:"Your Id User" , user: appointmentProfile});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };



  
export const deleteAppointmentProfile = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const deletedAppointmentProfile = await Appointment.findByIdAndDelete({_id:appointmentId});

    if (!deletedAppointmentProfile) {
      return res.status(404).json({ error: "Appointment profile not found" });
    }

    return res.status(200).json({ message: "Appointment profile deleted", Appointment: deletedAppointmentProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};