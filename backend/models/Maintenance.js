const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  device: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  maintenanceType: {
    type: String,
    enum: ['preventive', 'corrective', 'upgrade', 'inspection'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  performedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  maintenanceDate: {
    type: Date,
    required: true
  },
  completionDate: Date,
  cost: Number,
  partsReplaced: [String],
  status: {
    type: String,
    enum: ['scheduled', 'in-progress', 'completed', 'pending'],
    default: 'scheduled'
  },
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);
