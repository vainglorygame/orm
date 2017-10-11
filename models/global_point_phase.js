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
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_b_level: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_c_level: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hero_level: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_a_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_b_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_c_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_a_damage_true: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_a_damage_dealt: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_b_damage_true: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_b_damage_dealt: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_c_damage_true: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_c_damage_dealt: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_perk_damage_true: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_perk_damage_dealt: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_aa_damage_true: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_aa_damage_dealt: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_aacrit_damage_true: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ability_aacrit_damage_dealt: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    heal_heal_hero: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_healed_hero: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_heal_other: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_healed_other: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_rcvd_heal_hero: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_rcvd_healed_hero: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_rcvd_heal_other: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_rcvd_healed_other: {
      type: "DOUBLE",
      allowNull: true
    },
    item_001_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_004_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_014_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_015_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_017_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_018_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_020_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_024_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_025_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_026_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_028_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_029_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_034_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_041_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_043_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_048_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_049_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_050_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_053_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_057_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_063_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_066_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_068_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_069_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_070_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_071_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'global_point_phase',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
