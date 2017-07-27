/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player_point', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    player_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    series_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    filter_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hero_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    game_mode_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    played: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    wins: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    time_spent: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    trueskill_max: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_delta: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_mu: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_sigma: {
      type: "DOUBLE",
      allowNull: true
    },
    elo: {
      type: "DOUBLE",
      allowNull: true
    },
    kills: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    deaths: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    assists: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    farm: {
      type: "DOUBLE",
      allowNull: false
    },
    minion_kills: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    jungle_kills: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    non_jungle_minion_kills: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    crystal_mine_captures: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    gold_mine_captures: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    kraken_captures: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    turret_captures: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    gold: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    impact_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'player_point',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
