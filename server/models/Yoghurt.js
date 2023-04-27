import mongoose from "mongoose";
const {Schema, model} = mongoose

// Product Yoghurt Image - title - price - stok

const yoghurtSchema = Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    image: {
        data: Buffer,
        originalName: String,
        ContentType: String,
        createdAt: {type: Date, default: Date.now()}
    },
    url: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    stock: {
        type: Number,
        required: false
    }
})

const Yoghurt = model('yoghurt', yoghurtSchema)
export default Yoghurt