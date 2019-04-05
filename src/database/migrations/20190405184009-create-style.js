module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Styles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fillColor: {
      type: Sequelize.STRING
    },
    strokeColor: {
      type: Sequelize.STRING
    },
    strokeWidth: {
      type: Sequelize.FLOAT
    },
    opacity: {
      type: Sequelize.FLOAT
    },
    radius: {
      type: Sequelize.FLOAT
    },
    icon: {
      type: Sequelize.STRING
    },
    blur: {
      type: Sequelize.BOOLEAN
    },
    case: {
      type: Sequelize.BOOLEAN
    },
    caseColor: {
      type: Sequelize.STRING
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
  down: queryInterface => queryInterface.dropTable('Styles')
};
