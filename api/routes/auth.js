import router from "./users.js";
import { signup } from "../controllers/auth.js";
import express from "express";


const Router = express.Router()

// new user
router.post("/signup", signup);

// sign in
router.post("/signup",)

// google auth
router.post("/google",)

export default router;

