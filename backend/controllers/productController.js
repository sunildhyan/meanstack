const { getAllProducts, addProduct, deleteProduct } = require('../models/productModel');

const getProducts = (req, res) => {
    res.json(getAllProducts());
};

const createProduct = (req, res) => {
    const { name, price, category, inStock } = req.body;

    // Validation (you can move this to middleware)
    if (
        typeof name !== "string" ||
        typeof price !== "number" || price <= 0 ||
        typeof category !== "string" ||
        typeof inStock !== "boolean"
    ) {
        return res.status(400).json({ message: "Invalid product structure" });
    }

    const newProduct = addProduct({ name, price, category, inStock });
    res.status(201).json(newProduct);
};

const removeProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = deleteProduct(id);

    if (deleted) {
        res.json(deleted);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};

module.exports = { getProducts, createProduct, removeProduct };
