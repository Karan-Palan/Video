import express from "express"
import { addVideo, addView, random, sub, trend } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addVideo)

router.post("/:id", verifyToken, addVideo)

router.post("/:id", verifyToken, addVideo)

router.post("/find/:id", addVideo)

router.put("/view/:id", addView)

router.put("/trend", trend)

router.put("/random", random)

router.put("/sub", verifyToken, sub)

export default router; 