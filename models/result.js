/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('result', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    api_id: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    event_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    match_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    shard_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    sequence: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    winner_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'result',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
