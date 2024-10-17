// src/services/itemService.js
const Item = require('../models/itemModel');

const getAllItems = async () => {
  return await Item.find();
};

const createItem = async (data) => {
  const item = new Item(data);
  return await item.save();
};

const updateItem = async (id, data) => {
  return await Item.findByIdAndUpdate(id, data, { new: true });
};

const deleteItem = async (id) => {
  return await Item.findByIdAndDelete(id);
};

module.exports = {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
};
