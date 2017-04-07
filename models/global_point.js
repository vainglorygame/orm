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
    pick_rate: {
      type: "DOUBLE(8,2)",
      allowNull: false
    },
    win_rate: {
      type: "DOUBLE(8,2)",
      allowNull: false
    },
    gold_per_min: {
      type: "DOUBLE(8,2)",
      allowNull: false
    },
    cs_per_min: {
      type: "DOUBLE(8,2)",
      allowNull: false
    },
    series_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    filter_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    hero_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    game_mode_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    skill_tier_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    build_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'global_point',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
