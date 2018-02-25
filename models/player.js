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
    last_crunch_id: {
      type: DataTypes.BIGINT,
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
    trueskill_ranked_mu: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_ranked_sigma: {
      type: "DOUBLE",
      allowNull: true
    },
    played_ranked: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    played_casual: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    played_ranked_5v5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    played_casual_5v5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    played_blitz: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    played_aral: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    guild_tag: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    rank_points_ranked: {
      type: "DOUBLE",
      allowNull: true
    },
    rank_points_blitz: {
      type: "DOUBLE",
      allowNull: true
    },
    played_blitz_rounds: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    trueskill_casual_mu: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_casual_sigma: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_blitz_mu: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_blitz_sigma: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_br_mu: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_br_sigma: {
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
