import { Router } from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRooms,updateRoomsAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = Router();
// Room Route
router.post("/:hotelid", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, updateRooms);
router.put("/availability/:id", updateRoomsAvailability);
router.put("/available/:id", verifyAdmin, updateRoomsAvailability);
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
router.get("/", getRooms);
router.get("/:id", getRoom);

export default router