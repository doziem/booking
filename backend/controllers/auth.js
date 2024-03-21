import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

import { createError } from "../utils/error.js";

export const registerUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(201).json("User Created");
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    let data;
    if (username) {
      data = { username };
    }
    if (email) {
      data = { email };
    }
    const user = await User.findOne(data);
    if (!user) return next(createError(404, "User Not Found"));

    const isPassword = await bcrypt.compare(req.body.password, user.password);

    if (!isPassword) return next(createError(400, "Wrong Credentials"));

    const { password, isAdmin, ...others } = user._doc;

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(201)
      .json({ ...others });
  } catch (error) {
    next(error);
  }
};
