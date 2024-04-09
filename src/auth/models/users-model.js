const User = (sequelize, DataTypes) => {
    // Function to define the User model
    return sequelize.define("User", {
      // Defining the User model attributes
      username: {
        type: DataTypes.STRING, // Data type for username
        allowNull: false, // Not allowing null values
      },
      passwordHash: {
        type: DataTypes.STRING, // Data type for password hash
        allowNull: false, // Not allowing null values
      },
    });
  };
  
  module.exports = User; // Exporting the User model definition