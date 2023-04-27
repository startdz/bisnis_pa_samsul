import express from 'express'
import { createContact, getContacts, getContact, updateContact, deleteContact } from '../controllers/ContactController.js'

const router = express.Router()

//get all
router.get('/api/contact/', getContacts)
//create
router.post('/api/contact/', createContact)
//get byID
router.get('/api/contact/:id', getContact)
//update
router.put('/api/contact/:id',updateContact)
//delete
router.delete('/api/contact/:id', deleteContact)




export default router