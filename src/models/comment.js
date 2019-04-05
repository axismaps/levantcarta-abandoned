module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.TEXT,
    resolved: DataTypes.BOOLEAN
  }, {});
  Comment.associate = function () {
    // associations can be defined here
  };
  return Comment;
};
