import express from 'express'
import KurmaController from '../controllers/KurmaController.js'
import Upload from '../middlewares/Images.js'

const router = express.Router()

router.get('/api/product/kurma', KurmaController.listsKurma)
router.get('/api/product/kurma/:id', KurmaController.getKurma)
router.post('/api/product/kurma', Upload.single('images'), KurmaController.createKurma)
router.put('/api/product/kurma/:id', Upload.single('images'), KurmaController.updateKurma)
router.delete('/api/product/kurma/:id', KurmaController.removeKurma)

export default router