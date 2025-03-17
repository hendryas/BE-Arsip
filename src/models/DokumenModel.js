const db = require('../config/db'); // Koneksi ke database

const DokumenModel = {
	getAll: async () => {
		try {
			const data = await db('dokumen').select('*');
			return data;
		} catch (error) {
			console.error('❌ Error saat mengambil data:', error);
			throw error;
		}
	},

	getById: async (id) => {
		try {
			const data = await db('dokumen').where({ id }).first();

			return data;
		} catch (error) {
			console.error('❌ Error saat mengambil data:', error);
			throw error;
		}
	},

	// Menambahkan dokumen baru
	create: async (data) => {
		try {
			const [insertId] = await db('dokumen').insert(data);
			return insertId;
		} catch (error) {
			console.error('❌ Error saat menambahkan data:', error);
			throw error;
		}
	},

	// Memperbarui dokumen berdasarkan ID
	update: async (id, data) => {
		try {
			const affectedRows = await db('dokumen').where({ id }).update(data);
			return affectedRows;
		} catch (error) {
			console.error('❌ Error saat memperbarui data:', error);
			throw error;
		}
	},

	// Menghapus dokumen berdasarkan ID
	delete: async (id) => {
		try {
			const affectedRows = await db('dokumen').where({ id }).del();
			return affectedRows;
		} catch (error) {
			console.error('❌ Error saat menghapus data:', error);
			throw error;
		}
	},
};

module.exports = DokumenModel;
