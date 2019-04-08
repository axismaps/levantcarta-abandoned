module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING
  }, {});
  Type.associate = (models) => {
    Type.belongsTo(models.Layer);
  };
  return Type;
};
