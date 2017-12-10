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
    match_api_id: {
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
    },
    draft_position: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ban: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pick: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    items: {
      type: "BLOB",
      allowNull: false
    },
    item_grants: {
      type: "BLOB",
      allowNull: false
    },
    item_grants_inorder: {
      type: "BLOB",
      allowNull: true
    },
    item_sells: {
      type: "BLOB",
      allowNull: false
    },
    ability_a_use: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    ability_b_use: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    ability_c_use: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    ability_a_damage_true: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_a_damage_dealt: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_b_damage_true: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_b_damage_dealt: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_c_damage_true: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_c_damage_dealt: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_perk_damage_true: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_perk_damage_dealt: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_aa_damage_true: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_aa_damage_dealt: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_aacrit_damage_true: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ability_aacrit_damage_dealt: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    item_uses: {
      type: "BLOB",
      allowNull: false
    },
    player_damage: {
      type: "BLOB",
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
    heal_heal_ally: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_healed_ally: {
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
    heal_rcvd_healed_vamp: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_rcvd_heal_ally: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_rcvd_healed_ally: {
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
    }
  }, {
    tableName: 'participant_phases',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
