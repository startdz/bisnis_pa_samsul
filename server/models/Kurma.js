import mongoose from "mongoose";
const {Schema, model} = mongoose

const kurmaSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Text,
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
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
})

const Kurma = model('kurma', kurmaSchema)
export default Kurma;