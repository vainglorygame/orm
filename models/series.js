/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('series', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    dimension_on: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    start: {
      type: DataTypes.TIME,
      allowNull: true
    },
    end: {
      type: DataTypes.TIME,
      allowNull: true
    },
    currentPatch: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    show_in_web: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'series',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
