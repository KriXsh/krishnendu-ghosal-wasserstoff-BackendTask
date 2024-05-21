const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body; // Include email
    if (!email) {
      return res.status(400).json({ code: 400, error: 'Email is required' });
    }
    const user = new User({ username, email, password, role });
    await user.save();
    res.status(201).json({ code: 201, message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ code: 400, error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ code: 401, error: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ code: 200, token });
  } catch (err) {
    res.status(400).json({ code: 401, error: err.message });
  }
};
