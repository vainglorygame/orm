/* jshint indent: 2 */

var JsonField = require("sequelize-json");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stats_dimensions', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dimension_on: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    filter_hash: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    filter: JsonField(sequelize, "stats_dimensions", "filter")
  }, {
    tableName: 'stats_dimensions',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
