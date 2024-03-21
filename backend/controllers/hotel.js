import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

// Create Hotel
export const createHotel = async (req, res,next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotels = await newHotel.save();
    res.status(201).json(saveHotels);
  } catch (error) {
    next(error);
  }
};

// Update Hotels
export const updateHotels = async (req, res,next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

// Delete Hotel
export const deleteHotel = async (req, res,next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(201).json("Hotel Deleted Successfully");
  } catch (error) {
    next(error);
  }
};

// Get All Hotel
export const getHotels = async (req, res, next) => {
  const { min, max,limit, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 200000 },
    }).sort({ length: -1 }).limit(4);
    res.status(201).json(hotels);
  } catch (error) {
    next(error);
  }
};

// Single Hotels
export const getHotel = async (req, res,next) => {
  try {
    const oneHotel = await Hotel.findById(req.params.id);
    res.status(201).json(oneHotel);
  } catch (error) {
    next(error);
  }
};

// Get count by city
export const countByCity = async (req, res,next) => {
  
  const citties = req.query.cities.split(",")
  
  try {
  
    const list = await Promise.all(citties.map(city=>{
      return Hotel.countDocuments({city})
    }))

    res.status(201).json(list);
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res,next) => {
  
  try {
  
  const hotelCount =await Hotel.countDocuments({"type":"hotel"});
  const apartmentCount =await Hotel.countDocuments({"type":"apartment"});
  const resortCount =await Hotel.countDocuments({"type":"resort"});
  const villaCount =await Hotel.countDocuments({"type":"villa"});
  const cabinCount =await Hotel.countDocuments({"type":"cabin"});
    
    res.status(201).json([
      {"type":"hotel",count:hotelCount },
      {"type":"apartment",count:apartmentCount },
      {"type":"resort",count:resortCount },
      {"type":"villa",count:villaCount },
      {"type":"cabin",count:cabinCount },
  ]);
  } catch (error) {
    next(error);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel =await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};