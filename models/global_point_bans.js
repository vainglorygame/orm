/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_point_bans', {
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
    region_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    played: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    bans: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'global_point_bans',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
