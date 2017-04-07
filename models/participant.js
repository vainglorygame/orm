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
    hero_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    series_id: {
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
    kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    deaths: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    assists: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    farm: {
      type: "DOUBLE(6,2)",
      allowNull: false
    },
    gold: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true
    },
    crystal_mine_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    first_afk_time: {
      type: "DOUBLE(12,4)",
      allowNull: false
    },
    gold_mine_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    jungle_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    karma_level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    kraken_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    minion_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    non_jungle_minion_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    skill_tier: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    skin_key: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    turret_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
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
