const Order = require('../models/order.model');
const validateInputs = require('../utils/validateInputs.js');

exports.sendOrder = async (req, res) => {
  try {
    const { client, total, gifts } = req.body;
    if (validateInputs(client) && gifts.length && total) {
      const newOrder = new Order({
        gifts: gifts,
        client: { ...client },
        total: total,
      });
      await newOrder.save();
      res.json(newOrder);
    } else {
      throw new Error('Wrong input!');
    }

  } catch (err) {
    res.status(500).json(err);
  }
};