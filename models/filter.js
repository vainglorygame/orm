/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filter', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    filter_on: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    filter: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    filter_hash: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    tableName: 'filter',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
