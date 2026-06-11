const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  itemType: {
    type: String,
    enum: ['component', 'accessory', 'consumable', 'part'],
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  reorderLevel: {
    type: Number,
    default: 5
  },
  unitCost: Number,
  supplier: String,
  location: String,
  lastRestockDate: Date,
  expiryDate: Date,
  partNumber: String,
  description: String,
  status: {
    type: String,
    enum: ['in-stock', 'low-stock', 'out-of-stock'],
    default: 'in-stock'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inventory', inventorySchema);
