const db = require('../config/db'); // Koneksi ke database

const DokumenModel = {
	// Mengambil semua dokumen
	getAll: async () => {
		try {
			console.log('🔍 Menjalankan query: SELECT * FROM dokumen');
			const data = await db('dokumen').select('*');
			console.log('✅ Data berhasil diambil:', data);
			return data;
		} catch (error) {
			console.error('❌ Error saat mengambil data:', error);
			throw error;
		}
	},

	// Mengambil dokumen berdasarkan ID
	getById: async (id) => {
		try {
			console.log(
				`🔍 Menjalankan query: SELECT * FROM dokumen WHERE id = ${id}`
			);
			const data = await db('dokumen').where({ id }).first(); // Menggunakan `.first()` agar hasilnya objek, bukan array
			console.log('✅ Data ditemukan:', data);
			return data;
		} catch (error) {
			console.error('❌ Error saat mengambil data:', error);
			throw error;
		}
	},

	// Menambahkan dokumen baru
	create: async (data) => {
		try {
			console.log('📝 Menambahkan data:', data);
			const [insertId] = await db('dokumen').insert(data);
			console.log('✅ Data berhasil ditambahkan dengan ID:', insertId);
			return insertId;
		} catch (error) {
			console.error('❌ Error saat menambahkan data:', error);
			throw error;
		}
	},

	// Memperbarui dokumen berdasarkan ID
	update: async (id, data) => {
		try {
			console.log(`🔄 Memperbarui dokumen ID: ${id} dengan data:`, data);
			const affectedRows = await db('dokumen').where({ id }).update(data);
			console.log('✅ Data berhasil diperbarui:', affectedRows);
			return affectedRows;
		} catch (error) {
			console.error('❌ Error saat memperbarui data:', error);
			throw error;
		}
	},

	// Menghapus dokumen berdasarkan ID
	delete: async (id) => {
		try {
			console.log(`🗑 Menghapus dokumen ID: ${id}`);
			const affectedRows = await db('dokumen').where({ id }).del();
			console.log('✅ Data berhasil dihapus:', affectedRows);
			return affectedRows;
		} catch (error) {
			console.error('❌ Error saat menghapus data:', error);
			throw error;
		}
	},
};

module.exports = DokumenModel;
