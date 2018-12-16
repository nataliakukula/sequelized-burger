module.exports = function (sequelize, DataTypes) {
    // Create burger table and create access to the table model
    let Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            // allowNull false doesn't allow an empty value to be entered
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
                len: [1, 140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            // defaultValue is set to false
            defaultValue: false
        }
    });
    return Burger;
};