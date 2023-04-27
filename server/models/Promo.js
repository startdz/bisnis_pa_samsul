import mongoose from "mongoose";
const { Schema, model } = mongoose

const promoSchema = Schema({
    title: {
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
    },
    description: {
        type: Text,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
})

const Promo = model('promo', promoSchema)
export default Promo