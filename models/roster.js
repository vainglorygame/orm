/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roster', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shard_id: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: true
    },
    match_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    aces_earned: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    gold: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    },
    hero_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    kraken_captures: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    side: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    turret_kills: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    turrets_remaining: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    winner: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    bans: {
      type: DataTypes.STRING(191),
      allowNull: true
    }
  }, {
    tableName: 'roster',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
