const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const dokumenRoutes = require('./routes/dokumenRoutes');
const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, 'public/uploads');

if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true });
	console.log('📁 Folder "public/uploads" dibuat.');
} else {
	console.log('✅ Folder "public/uploads" sudah ada.');
}

// Middleware
app.use(express.json());

// Routing
app.use('/api/users', userRoutes);
app.use('/uploads', express.static('public/uploads'));
app.use('/api/dokumen', dokumenRoutes);

// Export aplikasi
module.exports = app;
