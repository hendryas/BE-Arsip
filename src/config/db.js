const knex = require('knex');
require('dotenv').config(); // Load konfigurasi dari .env

// Konfigurasi Knex.js untuk MySQL
const db = knex({
	client: 'mysql2',
	connection: {
		host: process.env.DB_HOST || '127.0.0.1',
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASS || '',
		database: process.env.DB_NAME || 'dokumen_db',
	},
	pool: { min: 2, max: 10 },
});

// Cek koneksi ke database
db.raw('SELECT 1')
	.then(() => console.log('✅ Koneksi ke MySQL berhasil!'))
	.catch((err) => {
		console.error('❌ Koneksi ke MySQL gagal:', err);
		process.exit(1);
	});

module.exports = db;
