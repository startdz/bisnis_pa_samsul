import mongoose from "mongoose";
const { Schema, model } = mongoose

const contactSchema = Schema({
    nameOfSosmed: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const Contact = model('contact', contactSchema)
export default Contact