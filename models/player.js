/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shard_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    last_match_created_date: {
      type: DataTypes.TIME,
      allowNull: true
    },
    last_update: {
      type: DataTypes.TIME,
      allowNull: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    xp: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    lifetime_gold: {
      type: "DOUBLE(8,2)",
      allowNull: false
    },
    skill_tier: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    trueskill_mu: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_sigma: {
      type: "DOUBLE",
      allowNull: true
    },
    elo: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'player',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
