const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/nodecrud")
    .then(() => {
        console.log("Database Connected Successfully");
    }).catch((error) => {
        console.log("Failed to connect db");
})
app.use(express.json());
const productRoutes = require("./src/routes/product.routes");
app.use("/product", productRoutes);
const port = 8000;
app.listen(port, () => {
    console.log("Server is listening on port ", port);
})
