module.exports = (sequelize, DataTypes) => {
  const Layer = sequelize.define('Layer', {
    name: DataTypes.STRING
  }, {});
  Layer.associate = (models) => {
    Layer.belongsTo(models.Dataset);
  };
  return Layer;
};
