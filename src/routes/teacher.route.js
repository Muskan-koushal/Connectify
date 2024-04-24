import express from "express";
import { createTeacherProfile, deleteTeacherProfile, deleteTeacherProfileField, getTeacherProfileByUserId, updateTeacherProfile } from "../controller/teacher.controller.js"
const router = express.Router();
router.post('/save',createTeacherProfile)
router.put("/update/:teacherId",updateTeacherProfile);
router.delete("/delete/:teacherId",deleteTeacherProfile);
router.delete("/deleteField/:teacherId/:fieldName",deleteTeacherProfileField);
router.get("/getData/:userId",getTeacherProfileByUserId);
export default router;
