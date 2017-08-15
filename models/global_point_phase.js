/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_point_phase', {
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
    phase_start: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    phase_end: {
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
    farm: {
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
    dmg_true_hero: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_true_kraken: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_true_turret: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_true_vain_turret: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_true_others: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_dealt_hero: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_dealt_kraken: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_dealt_turret: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_dealt_vain_turret: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_dealt_others: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_rcvd_dealt_hero: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_rcvd_true_hero: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_rcvd_dealt_others: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_rcvd_true_others: {
      type: "DOUBLE",
      allowNull: true
    },
    ability_a_level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ability_b_level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ability_c_level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
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
    }
  }, {
    tableName: 'global_point_phase',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
