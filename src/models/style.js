module.exports = (sequelize, DataTypes) => {
  const Style = sequelize.define('Style', {
    fillColor: DataTypes.STRING,
    strokeColor: DataTypes.STRING,
    strokeWidth: DataTypes.FLOAT,
    opacity: DataTypes.FLOAT,
    radius: DataTypes.FLOAT,
    icon: DataTypes.STRING,
    blur: DataTypes.BOOLEAN,
    case: DataTypes.BOOLEAN,
    caseColor: DataTypes.STRING
  }, {});
  Style.associate = (models) => {
    Style.hasMany(models.Type);
  };
  return Style;
};
