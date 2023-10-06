const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        
    title: {
        type:String
    },
    price: {
        type:Number
    },
    desc: {
        type:String
        },
    upload: {
        type:String
        }
})

module.exports = mongoose.model("Product", productSchema);