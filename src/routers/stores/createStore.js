const { createStore } = require('../../services/storeService')

module.exports = async (req, res) => {
  try {
    const result = await createStore(req.body);
    return res.status(201).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};
