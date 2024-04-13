const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  age: { type: Number, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' }
});

module.exports = mongoose.model('Student', studentSchema);