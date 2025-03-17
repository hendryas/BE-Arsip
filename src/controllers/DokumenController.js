const DokumenModel = require('../models/DokumenModel');
const path = require('path');
const fs = require('fs');

exports.getAllDokumen = async (req, res) => {
	try {
		const result = await DokumenModel.getAll();
		res.json(result);
	} catch (error) {
		res.status(500).json({ message: 'Gagal mengambil data', error });
	}
};

exports.getDokumenById = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await DokumenModel.getById(id);
		if (result.length === 0) {
			return res.status(404).json({ message: 'Dokumen tidak ditemukan' });
		}
		res.json(result[0]);
	} catch (error) {
		res.status(500).json({ message: 'Gagal mengambil data', error });
	}
};

exports.createDokumen = async (req, res) => {
	try {
		const { noPin, nama, branch, status, gudang, rak_aplikasi } = req.body;
		let filePath = null;

		if (req.file) {
			filePath = `/uploads/${req.file.filename}`;
		}

		await DokumenModel.create({
			noPin,
			nama,
			branch,
			status,
			gudang,
			rak_aplikasi,
			file_path: filePath,
		});

		res.status(201).json({ message: 'Dokumen berhasil disimpan' });
	} catch (error) {
		res.status(500).json({ message: 'Gagal menyimpan dokumen', error });
	}
};

exports.updateDokumen = async (req, res) => {
	try {
		const { id } = req.params;
		const { noPin, nama, branch, status, gudang, rak_aplikasi } = req.body;
		let filePath = req.body.file_path;

		if (req.file) {
			filePath = `/uploads/${req.file.filename}`;
		}

		const existingDokumen = await DokumenModel.getById(id);
		if (existingDokumen.length === 0) {
			return res.status(404).json({ message: 'Dokumen tidak ditemukan' });
		}

		await DokumenModel.update(id, {
			noPin,
			nama,
			branch,
			status,
			gudang,
			rak_aplikasi,
			file_path: filePath,
		});

		res.json({ message: 'Dokumen berhasil diperbarui' });
	} catch (error) {
		res.status(500).json({ message: 'Gagal memperbarui dokumen', error });
	}
};

exports.deleteDokumen = async (req, res) => {
	try {
		const { id } = req.params;
		const existingDokumen = await DokumenModel.getById(id);
		if (existingDokumen.length === 0) {
			return res.status(404).json({ message: 'Dokumen tidak ditemukan' });
		}

		// Hapus file jika ada
		if (existingDokumen[0].file_path) {
			const filePath = path.join(
				__dirname,
				'../public',
				existingDokumen[0].file_path
			);
			if (fs.existsSync(filePath)) {
				fs.unlinkSync(filePath);
			}
		}

		await DokumenModel.delete(id);
		res.json({ message: 'Dokumen berhasil dihapus' });
	} catch (error) {
		res.status(500).json({ message: 'Gagal menghapus dokumen', error });
	}
};
