/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player_ext', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    player_api_id: {
      type: DataTypes.STRING(191),
      allowNull: false,
      unique: true
    },
    played: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    played_ranked: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    played_casual: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    played_brawl: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    wins: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    wins_ranked: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    wins_casual: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    wins_brawl: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    skill_tier: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    streak: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    tableName: 'player_ext',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
