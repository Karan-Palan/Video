import router from "./users.js";
import { signin, signup } from "../controllers/auth.js";
import express from "express";


const Router = express.Router()

// new user
router.post("/signup", signup);

// sign in
router.post("/signup", signin);

// google auth
router.post("/google",)

export default router;

