import express from "express";
import { createDatingProfile, deleteDatingProfile, deleteDatingProfileField, getDatingProfileByUserId, updateDatingProfile } from "../controller/dating.controller.js";
const router = express.Router();
router.post("/save",createDatingProfile)
router.put("/update/:datingId",updateDatingProfile);
router.delete("/delete/:datingId/:fieldName",deleteDatingProfileField);
router.delete("/delete/:datingId",deleteDatingProfile)
router.get("/getData/:userId", getDatingProfileByUserId);
export default router;
