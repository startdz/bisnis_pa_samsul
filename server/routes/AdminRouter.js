import express from 'express'
import { register } from '../controllers/Administrator.js'

const routes = express.Router()

//route register
routes.post("/api/server/register", register)

export default routes