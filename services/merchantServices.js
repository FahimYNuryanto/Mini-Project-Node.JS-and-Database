const db = require('../models');
const Merchant = db.merchant;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
            message: 'Username must be provided'
        });  
        return;
    }
    const merchant = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        address: req.body.address,
        phone_number: req.body.phone_number
    };

    Merchant.create(merchant)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating account"
        });
    });
};

exports.update = (req, res) => {
    const username = req.params.username;
    Merchant.update(req.body, {
        where: {username: username}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Merchant account updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update merchant account with username=${username}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating merchant account with username" + username
            });
        });
};

exports.delete = (req, res) => {
    const username = req.params.username;
    username.destroy({
        where: { username: username}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Merchant account deleted successfully"
                });
            } else {
                res.send({
                    message: `Cannot delete merchant account with username=${username}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete merchant account with username" + username
            });
        });
};

