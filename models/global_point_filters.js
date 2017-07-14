/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_point_filters', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    filter_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    match_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    }
  }, {
    tableName: 'global_point_filters',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
