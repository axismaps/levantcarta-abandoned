module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING
  }, {});
  Type.associate = (models) => {
    Type.belongsTo(models.Layer);
    Type.belongsTo(models.Style);
  };
  return Type;
};
