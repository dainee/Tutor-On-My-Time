module.exports = function(sequelize, DataTypes) {
  var Availability = sequelize.define("availability", {
    day: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      startTime: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: false
      },
      endTime: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: false
      },
      subject:{
        type: DataTypes.STRING,
        allowNull: false
      }
  });

  // Availability.associate = function(models) {
  //   Availability.belongsTo(models.Tutor);
  // };
  return Availability;

};