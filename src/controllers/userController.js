const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
	res.json(User.getAll());
};

exports.getUserById = (req, res) => {
	const user = User.getById(req.params.id);
	if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
	res.json(user);
};

exports.createUser = (req, res) => {
	const { name, email } = req.body;
	const newUser = User.create({ name, email });
	res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
	const { name, email } = req.body;
	const updatedUser = User.update(req.params.id, { name, email });
	if (!updatedUser)
		return res.status(404).json({ message: 'User tidak ditemukan' });
	res.json(updatedUser);
};

exports.deleteUser = (req, res) => {
	const success = User.delete(req.params.id);
	if (!success)
		return res.status(404).json({ message: 'User tidak ditemukan' });
	res.json({ message: 'User berhasil dihapus' });
};
