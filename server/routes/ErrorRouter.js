import express from 'express'
import errorController from '../controllers/ErrorsController.js'

const router = express.Router()

router.get('/api/product/yoghurt/', errorController)

export default router