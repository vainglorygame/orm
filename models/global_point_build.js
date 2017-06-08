/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_point_build', {
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
    }
  }, {
    tableName: 'global_point_build',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
