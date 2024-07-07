import express from "express"
import { deleteUser, dislike, getUser, like, subscriber, unsubscribe, update } from "../controllers/users.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken, update)

router.delete("/:id", verifyToken, deleteUser)

router.get("/find/:id", verifyToken, getUser)

router.put("/sub/:id", verifyToken, subscriber)

router.put("/unsub/:id", verifyToken, unsubscribe)

router.put("/like/:videoId", verifyToken, like)

router.put("dislike/:videoId", verifyToken, dislike)

export default router; 