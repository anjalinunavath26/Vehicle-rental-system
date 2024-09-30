const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
    createBooking, 
    getBookings, 
    updateBooking, 
    deleteBooking
 } = require('../controllers/bookingController');

// Protected routes for managing bookings
router.route('/').post(protect, createBooking).get(protect, getBookings);
router.route('/:id').put(protect, updateBooking).delete(protect, deleteBooking);

module.exports = router;
