import { Router } from "express";
import {  deleteUser, getUser, getUsers, updateUsers } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = Router();
//User Route
router.put("/:id", updateUsers);
router.delete("/:id",verifyUser, deleteUser);
router.get("/", getUsers);
router.get("/:id",verifyAdmin, getUser);

export default router;