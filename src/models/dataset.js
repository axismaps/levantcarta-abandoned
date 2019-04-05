module.exports = (sequelize, DataTypes) => {
  const Dataset = sequelize.define('Dataset', {
    name: DataTypes.STRING
  }, {});
  Dataset.associate = function () {
    // associations can be defined here
  };
  return Dataset;
};
