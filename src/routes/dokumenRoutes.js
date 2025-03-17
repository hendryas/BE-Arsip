const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const DokumenController = require('../controllers/DokumenController');

// Konfigurasi Multer untuk upload file
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage: storage });

router.get('/', DokumenController.getAllDokumen);
router.get('/:id', DokumenController.getDokumenById);
router.post('/', upload.single('fileUpload'), DokumenController.createDokumen);
router.put(
	'/:id',
	upload.single('fileUpload'),
	DokumenController.updateDokumen
);
router.delete('/:id', DokumenController.deleteDokumen);

module.exports = router;
