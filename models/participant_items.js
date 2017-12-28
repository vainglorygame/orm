/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participant_items', {
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
    participant_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: true
    },
    items: {
      type: "BLOB",
      allowNull: false
    },
    item_grants: {
      type: "BLOB",
      allowNull: false
    },
    item_uses: {
      type: "BLOB",
      allowNull: false
    },
    item_sells: {
      type: "BLOB",
      allowNull: false
    },
    surrender: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    trueskill_ranked_mu: {
      type: "DOUBLE",
      allowNull: true
    },
    trueskill_ranked_sigma: {
      type: "DOUBLE",
      allowNull: true
    },
    any_afk: {
      type: DataTypes.INTEGER(3).UNSIGNED,
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
    tableName: 'participant_items',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
