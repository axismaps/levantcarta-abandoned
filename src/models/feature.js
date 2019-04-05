module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    name: DataTypes.TEXT,
    firstyear: DataTypes.INTEGER,
    lastyear: DataTypes.INTEGER,
    attributes: DataTypes.JSON,
    approved: DataTypes.BOOLEAN,
    geom: DataTypes.GEOMETRY
  }, {});
  Feature.associate = (models) => {
    Feature.hasMany(models.Comment);
    Feature.belongsTo(models.Type);
  };
  return Feature;
};
