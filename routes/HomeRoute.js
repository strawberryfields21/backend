import express from "express";
import { getHome } from "../controllers/HomeController.js";
const router = express.Router();

router.get('/home',getHome);
export default router;