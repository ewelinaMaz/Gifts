exports.getCart = async (req, res) => {
  try {
    if (!req.session || !req.session.cart || !req.session.cart.gifts) res.json([]);
    else if (!req.session.cart.gifts.length) res.json([]);
    else res.json(req.session.cart.gifts);
  } catch (err) {
    res.status(500).json(err);
  }
};
  
exports.saveCart = async (req, res) => {
  try {
    const { gifts } = req.body;
    req.session.cart = {
      gifts: gifts,
    };
    req.session.save();
    res.json(gifts);
  } catch (err) {
    res.status(500).json(err);
  }
};