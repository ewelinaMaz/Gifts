const Gift = require('../models/gift.model');

exports.getAll = async (req, res) => {
  try {
    const result = await Gift.find();
    if(!result) res.status(404).json({ gift: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Gift
      .find({ _id: req.params.id});
    if(!result) res.status(404).json({ gift: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
  