const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  windSpeed: {
    type: Number,
    required: true
  },
  // Add other weather properties as needed
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;
