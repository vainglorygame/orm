/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_point', {
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
    skill_tier_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    build_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    region_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    played: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wins: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    time_spent: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    kills: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    deaths: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    assists: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    minion_kills: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    jungle_kills: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    non_jungle_minion_kills: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    crystal_mine_captures: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gold_mine_captures: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    kraken_captures: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    turret_captures: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gold: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    kda_ratio: {
      type: "DOUBLE(20,5)",
      allowNull: true
    },
    kill_participation: {
      type: "DOUBLE(20,5)",
      allowNull: true
    },
    cs_per_min: {
      type: "DOUBLE(20,5)",
      allowNull: true
    },
    kills_per_min: {
      type: "DOUBLE(20,5)",
      allowNull: true
    },
    impact_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    objective_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    damage_cp_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    damage_wp_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sustain_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    farm_lane_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    kill_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    objective_lane_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    farm_jungle_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    peel_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    kill_assist_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    objective_jungle_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    vision_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    heal_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    assist_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    utility_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    synergy_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    build_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    offmeta_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'global_point',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
