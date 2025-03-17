let users = [
	{ id: 1, name: 'John Doe', email: 'john@example.com' },
	{ id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

module.exports = {
	getAll: () => users,
	getById: (id) => users.find((user) => user.id == id),
	create: (data) => {
		const newUser = { id: users.length + 1, ...data };
		users.push(newUser);
		return newUser;
	},
	update: (id, data) => {
		let index = users.findIndex((user) => user.id == id);
		if (index === -1) return null;
		users[index] = { ...users[index], ...data };
		return users[index];
	},
	delete: (id) => {
		const index = users.findIndex((user) => user.id == id);
		if (index === -1) return false;
		users.splice(index, 1);
		return true;
	},
};
