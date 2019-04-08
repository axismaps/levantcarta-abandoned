module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Types', // name of Source model
    'LayerId', // name of the key we're adding
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Layers', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  ),

  down: queryInterface => queryInterface.removeColumn('Types', 'LayerId')
};
