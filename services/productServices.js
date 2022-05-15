const db = require('../models');
const Products = db.products;
const Merchant = db.merchant;

exports.create = (req, res) => {
    const merchant = Merchant.findOne({
        where: {
            username: req.params.username
        }
    });
    if(!req.body.name || !req.body.price) {
        res.status(400).send({
            message: "Please enter product name and its price."
        })
        return
    }
    const product = {
        merchant_id: merchant.id,
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price
    };

    Products.create(product)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating product."
        });
    });
};

// Finding All Products
exports.findAll = (req, res) => {
    const merchant = Merchant.findOne({
        where: {
            username: req.params.username
        }
    });
    try {
    const products = Products.findAll({
        where: {
            merchant_id : merchant.id
        }
    });
    if(products == null) {
        res.status(404).send({
            message: "Products not found."
        })
    }res.send(products)
}catch(error) {
    res.status(400).send({
        message: "Something went wrong"
    });
};
};

// Finding A Product
exports.findOne = (req, res) => {
    const merchant = Merchant.findOne({
        where: {
            username: req.params.username
        }
    });

    try {
        const product = product.findOne({
            where: {
                merchant_id: merchant.id,
                id: req.body.id
            }
        });
        if(product == null) {
            res.status(404).send({
                message: "Products not found."
            })
        }res.send(product)
    }catch(error) {
        res.status(400).send({
            message: "Something went wrong"
        });
    };
    };

// Updating a Product
exports.update = (req, res) => {
    const merchant = Merchant.findOne({
        where: {
            username: req.params.username
        }
    });

    try {
        const product = product.findOne({
            where: {
                merchant_id: merchant.id,
                id: req.body.id
            }
        });
        if(product == null) {
            res.status(404).send({
                message: "Products not found."
            })
        }
        Products.update(req.body, {
            where: {name: product.name}
        })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Product updated successfully"
                });
            } else {
                res.status(400).send({
                    message: "Cannot update product."
                });
            }
        })
}catch(error) {
    res.status(400).send({
        message: "Something went wrong"
    })
    }
};

// Deleting a product
exports.delete = (req, res) => {
    const merchant = Merchant.findOne({
        where: {
            username: req.params.username
        }
    });
    const product = product.findOne({
        where: {
            merchant_id: merchant.id,
            id: req.body.id
        }
    });
    product.destroy({
        where: {name : product.name}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Product deleted successfully."
            });
        } else {
            res.send({
                message: `Cannot delete product.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete product."
        });
    });
}
