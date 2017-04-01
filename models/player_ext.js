/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player_ext', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    player_api_id: {
      type: DataTypes.STRING(191),
      allowNull: false,
      unique: true
    },
    played: {
      type: DataTypes.INTEGER(11),
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
    played_brawl: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    wins: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    wins_ranked: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    wins_casual: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    wins_brawl: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    skill_tier: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    played_role_1: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    played_role_2: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    played_role_3: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    streak: {
      type: DataTypes.STRING(191),
      allowNull: true
    }
  }, {
    tableName: 'player_ext',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
