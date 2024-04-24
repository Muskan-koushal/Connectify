import express from "express";
import { createEvent, updateEvent, deleteEvent, deleteEventField, getEventByUserId } from "../controller/event.controller.js";

const router = express.Router();
router.post('/save', createEvent);
router.put("/update/:eventId", updateEvent);
router.delete("/delete/:eventId", deleteEvent);
router.delete("/deleteField/:eventId/:fieldName", deleteEventField);
router.get("/getData/:userId", getEventByUserId);

export default router;
