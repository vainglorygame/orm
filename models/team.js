/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shard_id: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    api_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    identifier: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('planned','active','inactive'),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('team','guild','tournament'),
      allowNull: false
    }
  }, {
    tableName: 'team',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
