module.exports = function (sequelize, DataTypes) {
    //Creating a burger model (MySQL table)
    const Burger = sequelize.define("Burger", {
        burger_name: {

            type: DataTypes.STRING,

            allowNull: false,

            validate: {
                len: [1, 33]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,

            defaultValue: false
        }
    });
    // Associating Burger with one specific Customer
    Burger.associate = function (models) {
        // If Burger is deleted, also delete any associated Customers
        Burger.hasOne(models.Customer, {
            onDelete: "cascade"
        });
    };

    return Burger;
};