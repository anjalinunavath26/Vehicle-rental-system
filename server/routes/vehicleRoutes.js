const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    createVehicle,
    getVehicles,
    updateVehicle,
    deleteVehicle
} = require('../controllers/vehicleController');

// Unprotected routes (e.g., for viewing vehicles)
router.route('/').get(getVehicles);

// Protected routes (e.g., for creating, updating, and deleting vehicles)
router.route('/').post(protect, createVehicle);
router.route('/:id').put(protect, updateVehicle).delete(protect, deleteVehicle);

module.exports = router;
