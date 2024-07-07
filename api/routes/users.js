import express from "express"
import { deleteUser, dislike, getUser, like, subscriber, unsubscribe, update } from "../controllers/users.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken,update)

router.delete("/:id", deleteUser )

router.get("/find/:id", getUser)

router.put("/sub/:id", subscriber)

router.put("/unsub/:id", unsubscribe)

router.put("/like/:videoId", like)

router.put("dislike/:videoId", dislike)

export default router; 