const Product = require("../models/product.model")
exports.addProduct = async (req, res) => {
    try {
        await new Product(req.body).save()
        res.json({ message: "Product added successfully", status: true, result: Product });
    } catch (error) {
        res.json({ message: "Failed to add product", status: false });
    }
}
exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ message: "Product fetched successfully", status: true , result : products});
  } catch (error) {
    res.json({ message: "Failed to fetched product", status: false });
  }
};
//getting product by id
exports.getProductById = async (req, res) => {
    try {
        const getProductById = await Product.findById(req.params.id);
        res.send({
            message: "Product fetched by id was successfull!",
            status: true,
            result: getProductById
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Could not delete Product with id",
        });
    }
}
exports.update = async (req, res) => {
  try {
    const getProductById = await Product.findByIdAndUpdate(req.param.id);
    res.send({
      message: "product has been updated successfully",
      status: true,
      result: getProductById,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "product didnt updated",
    });
  }
};

exports.delete = async (req, res) => {
    try {
        const getProductById = await Product.findByIdAndDelete(req.param.id);
        res.send({
            message: "product has been deleted successfully",status:true,result:getProductById
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "product didnt deleted"
        });
        }
}
  exports.getAllProduct = async (req, res) => {
    try {
      const products = await Product.insertMany(req.body);
      res.json({
        message: "Products inserted successfully",
        status: true,
        result: Product,
      });
    } catch (error) {
      res.json({ message: "Failed to insert product", status: false });
    }
};
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.updateMany(req.body);
    res.json({ message: "Products updated successfully",
        status: true,
        result: Product,
      });
    } catch (error) {
      res.json({ message: "Failed to update products", status: false });
    }
}
    exports.getAllProducts = async (req, res) => {
      try {
        const products = await Product.deleteMany(req.body);
        res.json({
          message: "Products deleted successfully",
          status: true,
          result: Product,
        });
      } catch (error) {
        res.json({ message: "Failed to delete products", status: false });
      }
    };
    
  


    