module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Features',
    'approved',
    Sequelize.BOOLEAN
  ),

  down: queryInterface => queryInterface.removeColumn(
    'Features',
    'approved'
  )
};
