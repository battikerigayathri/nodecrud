const productController = require("../controllers/product.controller")
const router = require("express").Router()

router.post("/add", productController.addProduct);
router.get("/get/all", productController.getAllProduct);
router.get("/get/:id", productController.getProductById);
router.put("/update/:id", productController.update);
router.delete("/delete/:id", productController.delete);
router.post("/insert", productController.getAllProduct);
router.put("/updateMany",productController.getAllProducts);
router.delete("/deleteMany",productController.getAllProducts)
module.exports = router