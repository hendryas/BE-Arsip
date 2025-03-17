const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const dokumenRoutes = require('./routes/dokumenRoutes');

// Middleware
app.use(express.json()); // Untuk parsing JSON request body

// Routing
app.use('/api/users', userRoutes);
app.use('/uploads', express.static('public/uploads'));
app.use('/api/dokumen', dokumenRoutes);

// Export aplikasi
module.exports = app;
