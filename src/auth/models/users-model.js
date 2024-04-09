const User = (sequelize, DataTypes) => {
    return sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  };
  
  module.exports = User;