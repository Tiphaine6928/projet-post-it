import express from "express";
import indexController from "../controllers/indexController.js";

const router = express.Router();

router.post('/submit', indexController.showInput);

export default router