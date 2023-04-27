import Contact from '../models/Contact.js'
import fs from 'fs'
import path from 'path'

//get all
export const getContacts = async(req, res) => {
   try {
        const contacts = await Contact.find()
        res.json(contacts)
   } catch (error) {
        res.status(500).json({message:error.message})
   }
}

//create
export const createContact = async(req, res) => {
     const contact = new Contact(req.body)
     try {
          const createdContact = await contact.save()
          res.status(201).json(createdContact)
     } catch (error) {
          res.status(400).json({message: error.message})
     }
}

//get by id
export const getContact = async(req, res) => {
     try {
          const contact = await Contact.findById(req.params.id)
          res.json(contact)
     } catch (error) {
          res.status(404).json({message: error.message})
     }
}

//update
export const updateContact = async(req, res) => {
     try {
          const updatedContact = await Contact.updateOne(
               {_id:req.params.id},
               {$set: req.body}
          )
          res.status(200).json(updatedContact)
     } catch(error) {
          res.status(400).json({message: error.message})
     }
}

//delete
export const deleteContact = async(req, res) => {
     try {
          const deletedContact = await Contact.deleteOne({_id:req.params.id})
          res.status(200).json(deletedContact)
     } catch (error) {
          res.status(400).json({message:error.message})
     }
}