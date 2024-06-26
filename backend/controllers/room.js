import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

// Update Rooms
export const updateRooms = async (req, res,next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(201).json(updatedRoom);
    } catch (error) {
      next(error);
    }
  };
  // updateRoomsAvailability
  export const updateRoomsAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates,
          },
        }
      );
      res.status(201).json( "Available Date Updated");
    } catch (error) {
      next(error);
    }
  };
  // Delete Room
  export const deleteRoom = async (req, res,next) => {

  const hotelId = req.params.hotelid;

    try {
      await Room.findByIdAndDelete(req.params.id);

      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(201).json("Room Deleted Successfully");
    } catch (error) {
      next(error);
    }
  };
  
  // Get All Room
  export const getRooms = async (req, res,next) => {
    try {
      const rooms = await Room.find();
      res.status(201).json(rooms);
    } catch (error) {
      next(error);
    }
  };
  
  // Single Rooms
  export const getRoom = async (req, res,next) => {
    try {
      const room = await Room.findById(req.params.id);
      res.status(201).json(room);
    } catch (error) {
      next(error);
    }
  };
