module.exports = function (sequelize, DataTypes) {
    //Creating a customer model (MySQL table)
    const Customer = sequelize.define("Customer", {
        customer_name: {

            type: DataTypes.STRING,

            allowNull: false,

            validate: {
                len: [1, 33]
            }
        }
    });

    return Customer;
};