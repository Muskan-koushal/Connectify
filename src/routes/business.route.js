import express from "express";
import { createBusinessProfile, deleteBusinessProfile, deleteBusinessProfileField, getBusinessProfileByUserId, updateBusinessProfile } from "../controller/business.controller.js"
const router = express.Router();
router.post("/save",createBusinessProfile)
router.put("/update/:businessId",updateBusinessProfile);
router.delete("/deleteField/:businessId/:fieldName",deleteBusinessProfileField);
router.delete("/delete/:businessId",deleteBusinessProfile)
router.get("/getData/:userId",getBusinessProfileByUserId);
export default router;