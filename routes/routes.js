import express from 'express';
import { upload , downloadFile } from '../controller/controller.js'
import uploadFile from '../middleware/upload.js'

const router = express.Router();

router.post('/upload',uploadFile.single('file'), upload);
router.get('/file/:fileId', downloadFile)

export default router;