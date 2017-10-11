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
    enemy_hero_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    enemy_role_id: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    trueskill_delta: {
      type: "DOUBLE",
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
      type: "DOUBLE",
      allowNull: false
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
    impact_score: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    surrender: {
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
    },
    item_072_use: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'global_point',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
