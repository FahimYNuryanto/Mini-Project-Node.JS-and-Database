module.exports = (sequelize, Sequelize) => {
    const Merchant = sequelize.define("merchant", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {timestamps: true, createdAt: "join_date", updatedAt: false});
    return Merchant
};