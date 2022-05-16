module.exports = app => {
const Merchant = require("../services/merchantServices.js");
const Products = require("../services/productServices.js");
var router = require("express").Router();

// Create a new account
router.post('/merchant/register', Merchant.create);
// Update an account
router.put('/merchant/:username', Merchant.update);
// Delete an account
router.delete('/merchant/:username', Merchant.delete);

// Create a new product
router.post('/products', Products.create);
// Get all products in an account
router.get('/products/:username', Products.findAll);
// Get a product in an account
router.get('/products/:username/:id', Products.findOne);
// Updating a product
router.put('/products/:username/:id', Products.update);
// Delete a product
router.delete('products/:username/:id', Products.delete);
app.use('/api', router);
};  