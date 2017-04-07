/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participant_stats', {
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
    participant_id: {
      type: DataTypes.BIGINT,
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
    minion_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    jungle_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    non_jungle_minion_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    crystal_mine_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    gold_mine_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    kraken_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    turret_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    gold: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true
    },
    hero_level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    role: {
      type: DataTypes.ENUM('captain','carry','jungler'),
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
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    objective_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    damage_cp_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    damage_wp_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    sustain_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    farm_lane_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    kill_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    objective_lane_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    farm_jungle_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    peal_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    kill_assist_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    objective_jungle_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    vision_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    heal_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    assist_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    utility_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    synergy_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    build_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    offmeta_score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'participant_stats',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
