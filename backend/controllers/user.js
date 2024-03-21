import User from "../models/User.js";

// Update Users
export const updateUsers = async (req, res,next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Delete User
export const deleteUser = async (req, res,next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("User Deleted Successfully");
  } catch (error) {
    next(error);
  }
};

// Get All User
export const getUsers = async (req, res,next) => {
  try {
    const allUser = await User.find();
    res.status(201).json(allUser);
  } catch (error) {
    next(error);
  }
};

// Single Users
export const getUser = async (req, res,next) => {
  try {
    const oneUser = await User.findById(req.params.id);
    res.status(201).json(oneUser);
  } catch (error) {
    next(error);
  }
};