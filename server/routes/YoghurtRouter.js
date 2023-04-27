import express from 'express'
import YoghurtController from '../controllers/YoghurtController.js'
import Upload from '../middlewares/Images.js'

const router = express.Router()

//results
router.get('/api/product/yoghurt/', YoghurtController.getYoghurts)
//create
router.post('/api/product/yoghurt/', Upload.single('image'), YoghurtController.createYoghurt)
//update
// router.put('/api/product/yoghurt/:id', Upload.single('image'), updateYoghurt)
// //get
// router.get('/api/product/yoghurt/:id', getYoghurt)

// /**
//  * Debugger
//  */
// router.get('/api/product/deyoghurt/:id', getDebugYoghurt)
// router.post('/api/product/deyoghurt/', Upload.single('image'), postDebugYoghurt)

export default router