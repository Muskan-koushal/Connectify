import express from "express";
import { createAppointmentProfile, deleteAppointmentProfile, deleteAppointmentProfileField, getAppointmentProfileByUserId, updateAppointmentProfile } from "../controller/appointment.controller.js";
const router = express.Router();
router.post("/save",createAppointmentProfile)
router.put("/update/:appointmentId",updateAppointmentProfile);
router.delete("/deleteField/:appointmentId/:fieldName", deleteAppointmentProfileField);
router.delete("/delete/:appointmentId",deleteAppointmentProfile)
router.get("/getData/:userId",getAppointmentProfileByUserId);
export default router;