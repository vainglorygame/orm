/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shard_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    game_mode: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    end_game_reason: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    queue: {
      type: DataTypes.STRING(16),
      allowNull: false
    }
  }, {
    tableName: 'match',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
