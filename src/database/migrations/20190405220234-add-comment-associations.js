module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Comments', // name of Source model
    'FeatureId', // name of the key we're adding
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Features', // name of Target model
        key: 'id' // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  ),
  down: queryInterface => queryInterface.removeColumn('Comments', 'FeatureId')
};
