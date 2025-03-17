const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const DokumenController = require('../controllers/DokumenController');
const fs = require('fs');

const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true });
	console.log('📁 Folder "public/uploads" dibuat.');
}

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
