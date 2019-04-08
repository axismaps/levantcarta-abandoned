module.exports = (sequelize, DataTypes) => {
  const Dataset = sequelize.define('Dataset', {
    name: DataTypes.STRING
  }, {});
  Dataset.associate = (models) => {
    Dataset.hasMany(models.Layer);
  };
  return Dataset;
};
