import Cart from "../models/Cart.js";

// Add or update cart
export const addToCart = async (req, res) => {
  try {
    const existing = await Cart.findOne({ user: req.body.user });

    if (existing) {
      existing.items.push(...req.body.items);
      const updated = await existing.save();
      return res.json(updated);
    }

    const newCart = new Cart(req.body);
    const saved = await newCart.save();
    res.status(201).json(saved);
  } catch (err) { res.status(500).json(err); }
};

// Get Cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate("items.product");
    res.json(cart);
  } catch (err) { res.status(500).json(err); }
};