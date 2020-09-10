const Gift = require('../models/gift.model');

exports.getAll = async (req, res) => {
  try {
    const gifts = await Gift.find();
    if(!gifts) res.status(404).json({ gift: 'Not found' });
    else res.json(gifts);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getById = async (req, res) => {
  try {
    const gifts = await Gift
      .find({ id: req.params.id});
    if(!gifts) res.status(404).json({ gift: 'Not found' });
    else res.json(gifts);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
  