/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player_point', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    player_api_id: {
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
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    series_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    role_id: {
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
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
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
    hero_level: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    kda_ratio: {
      type: "DOUBLE(10,5)",
      allowNull: true
    },
    kill_participation: {
      type: "DOUBLE(10,5)",
      allowNull: true
    },
    cs_per_min: {
      type: "DOUBLE(14,5)",
      allowNull: true
    },
    kills_per_min: {
      type: "DOUBLE(12,5)",
      allowNull: true
    },
    impact_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    objective_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    damage_cp_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    damage_wp_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    sustain_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    farm_lane_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    kill_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    objective_lane_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    farm_jungle_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    peel_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    kill_assist_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    objective_jungle_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    vision_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    heal_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    assist_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    utility_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    synergy_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    build_score: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    offmeta_score: {
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
