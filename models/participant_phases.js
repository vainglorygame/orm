/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participant_phases', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    start: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    end: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    participant_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    deaths: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    assists: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    farm: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true
    },
    minion_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    jungle_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    non_jungle_minion_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    crystal_mine_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    gold_mine_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    kraken_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    turret_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    gold: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true
    },
    hero_damage_true: {
      type: "DOUBLE",
      allowNull: true
    },
    hero_damage_dealt: {
      type: "DOUBLE",
      allowNull: true
    },
    non_hero_damage: {
      type: "DOUBLE",
      allowNull: true
    },
    non_hero_damage_dealt: {
      type: "DOUBLE",
      allowNull: true
    },
    hero_level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    kda_ratio: {
      type: "DOUBLE(5,5)",
      allowNull: true
    },
    kill_participation: {
      type: "DOUBLE(5,5)",
      allowNull: true
    },
    cs_per_min: {
      type: "DOUBLE(7,5)",
      allowNull: true
    },
    kills_per_min: {
      type: "DOUBLE(6,5)",
      allowNull: true
    },
    impact_score: {
      type: "DOUBLE",
      allowNull: true
    },
    objective_score: {
      type: "DOUBLE",
      allowNull: true
    },
    damage_cp_score: {
      type: "DOUBLE",
      allowNull: true
    },
    damage_wp_score: {
      type: "DOUBLE",
      allowNull: true
    },
    sustain_score: {
      type: "DOUBLE",
      allowNull: true
    },
    farm_lane_score: {
      type: "DOUBLE",
      allowNull: true
    },
    kill_score: {
      type: "DOUBLE",
      allowNull: true
    },
    objective_lane_score: {
      type: "DOUBLE",
      allowNull: true
    },
    farm_jungle_score: {
      type: "DOUBLE",
      allowNull: true
    },
    peel_score: {
      type: "DOUBLE",
      allowNull: true
    },
    kill_assist_score: {
      type: "DOUBLE",
      allowNull: true
    },
    objective_jungle_score: {
      type: "DOUBLE",
      allowNull: true
    },
    vision_score: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_score: {
      type: "DOUBLE",
      allowNull: true
    },
    assist_score: {
      type: "DOUBLE",
      allowNull: true
    },
    utility_score: {
      type: "DOUBLE",
      allowNull: true
    },
    synergy_score: {
      type: "DOUBLE",
      allowNull: true
    },
    build_score: {
      type: "DOUBLE",
      allowNull: true
    },
    offmeta_score: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'participant_phases',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};