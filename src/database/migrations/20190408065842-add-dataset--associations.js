module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Layers', // name of Source model
    'DatasetId', // name of the key we're adding
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Datasets', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  ),

  down: queryInterface => queryInterface.removeColumn('Layers', 'DatasetId')
};
