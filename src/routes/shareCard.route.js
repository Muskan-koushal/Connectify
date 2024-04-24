import express from "express";
import {setShareCard} from "../controller/shareCard.controller.js";
const router = express.Router();
router.post("/save",setShareCard);
export default router;