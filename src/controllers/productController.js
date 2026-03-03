import Product from "../models/Product.js";

// Create
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) { res.status(500).json(err); }
};

// Read All
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) { res.status(500).json(err); }
};

// Read One
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) { res.status(500).json(err); }
};

// Update
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new:true });
    res.json(updated);
  } catch (err) { res.status(500).json(err); }
};

// Delete
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) { res.status(500).json(err); }
};