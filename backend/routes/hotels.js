import { Router } from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotels,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = Router();
//Hotel Route
router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotels);
router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/find/:id", getHotel);
router.get("/", getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/rooms/:id", getHotelRooms);

export default router;
