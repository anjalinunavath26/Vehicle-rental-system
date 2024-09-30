const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register new user
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password || !phone) {
            return res.status(400).json({ error: 'All fields (name, email, password, phone) are required' });
        }

        const user = await User.create({ name, email, password, phone });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.status(201).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


// Login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
