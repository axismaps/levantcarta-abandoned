module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.TEXT,
    resolved: DataTypes.BOOLEAN
  }, {});
  Comment.associate = (models) => {
    Comment.belongsTo(models.Feature);
  };
  return Comment;
};
