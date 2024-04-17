const mongoose = require('mongoose');  // Import Mongoose for MongoDB interactions

const studentSchema = new mongoose.Schema({  // Define schema for student document
  name: { type: String, required: true },  // Name field of type String, required
  image: { type: String, required: true },
  age: { type: Number, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' }
});

module.exports = mongoose.model('Student', studentSchema);
