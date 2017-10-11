/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_point_hero_vs_hero', {
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
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hero2_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    role2_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    played_with: {
      type: DataTypes.INTEGER(1),
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
    region_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    played: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    wins: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    trueskill_delta: {
      type: "DOUBLE",
      allowNull: false
    },
    duration: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kills: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    deaths: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    assists: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    farm: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    minion_kills: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    jungle_kills: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    non_jungle_minion_kills: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    crystal_mine_captures: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    gold_mine_captures: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kraken_captures: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    turret_captures: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    gold: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    impact_score: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    surrender: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    tableName: 'global_point_hero_vs_hero',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
