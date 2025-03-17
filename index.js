require('dotenv').config();
const express = require('express');
const app = require('./src/app'); // Import aplikasi dari app.js

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server berjalan di http://localhost:${PORT}`);
});
