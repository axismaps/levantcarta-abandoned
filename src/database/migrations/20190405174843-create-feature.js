module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Features', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.TEXT
    },
    firstyear: {
      type: Sequelize.INTEGER
    },
    lastyear: {
      type: Sequelize.INTEGER
    },
    attributes: {
      type: Sequelize.JSON
    },
    geom: {
      type: Sequelize.GEOMETRY
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Features')
};
