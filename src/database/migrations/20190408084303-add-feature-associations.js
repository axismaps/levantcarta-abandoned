module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Features', // name of Source model
    'TypeId', // name of the key we're adding
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Types', // name of Target model
        key: 'id' // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  ),

  down: queryInterface => queryInterface.removeColumn('Features', 'TypeId')
};
