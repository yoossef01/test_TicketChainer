import express from 'express';
import { getAllDocuments,createDocument,getDocumentById,updateDocument,deleteDocumentById } from '../controllers/documentController.js';
const router=express.Router();

router.get('/all',getAllDocuments);
router.post('/add',createDocument);
router.get('/:id',getDocumentById);
router.put('/update/:id',updateDocument);
router.delete('/del/:id',deleteDocumentById);
export default router;