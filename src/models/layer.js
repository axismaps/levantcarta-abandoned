module.exports = (sequelize, DataTypes) => {
  const Layer = sequelize.define('Layer', {
    name: DataTypes.STRING
  }, {});
  Layer.associate = function () {
    // associations can be defined here
  };
  return Layer;
};
