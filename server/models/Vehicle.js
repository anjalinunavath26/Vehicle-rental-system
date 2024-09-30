const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['electric_scooter', 'bike', 'car', 'petrol_scooter', 'bicycle'],
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    pricePerHour: {
        type: Number,
        required: true
    },
    pricePerDay: {
        type: Number,
        required: true
    },
    pricePerWeek: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
