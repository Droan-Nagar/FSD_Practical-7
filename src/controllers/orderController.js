import Order from "../models/Order.js";

// Create order
export const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const saved = await newOrder.save();
    res.status(201).json(saved);
  } catch (err) { res.status(500).json(err); }
};

// Get all
export const getOrders = async (req,res) => {
  try {
    const orders = await Order.find().populate("user products.product");
    res.json(orders);
  } catch (err) { res.status(500).json(err); }
};