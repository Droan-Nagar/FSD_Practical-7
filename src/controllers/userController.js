import User from "../models/User.js";

// Create
export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (err) { res.status(500).json(err); }
};

// Read All
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) { res.status(500).json(err); }
};