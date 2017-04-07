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
    start: {
      type: DataTypes.TIME,
      allowNull: true
    },
    end: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'series',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
