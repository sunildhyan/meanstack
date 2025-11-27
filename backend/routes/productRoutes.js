const express = require('express');
const router = express.Router();
const { getProducts, createProduct, removeProduct } = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', createProduct);
router.delete('/:id', removeProduct);

module.exports = router;
