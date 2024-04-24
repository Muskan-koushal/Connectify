import express from "express";
import { getUserCard, setUserCard } from "../controller/mycard.controller.js";
const router = express.Router();
router.post("/save",setUserCard);
router.get("/getData",getUserCard);
export default router;