/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participant', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shard_id: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: true
    },
    player_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    roster_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    match_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    hero_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    series_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    game_mode_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    filter_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: false
    },
    actor: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    farm: {
      type: "DOUBLE(6,2)",
      allowNull: false
    },
    first_afk_time: {
      type: "DOUBLE(12,4)",
      allowNull: false
    },
    karma_level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    skill_tier: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    skin_key: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    went_afk: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    winner: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'participant',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
