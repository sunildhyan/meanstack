let products = [];
let currentId = 1;

function getAllProducts() {
    return products;
}

function addProduct(product) {
    const newProduct = { id: currentId++, ...product };
    products.push(newProduct);
    return newProduct;
}

function deleteProduct(id) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        return products.splice(index, 1)[0];
    }
    return null;
}

module.exports = { getAllProducts, addProduct, deleteProduct };
