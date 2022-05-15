module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
    id: {
            type: Sequelize.INTEGER,
            auto_increment: true,
            primaryKey: true
        },
    merchant_id: {
        type: Sequelize.INTEGER,
        references: { model: 'merchant', key: 'id' },
        foreignKey: true
    },
    
    name: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    Price: {
        type: Sequelize.FLOAT
    }
});
return Product
}
