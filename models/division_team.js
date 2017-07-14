/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('division_team', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    division_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    played: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    wins: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    games_played: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    games_won: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    seed: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    points: {
      type: "DOUBLE",
      allowNull: false
    },
    sub_division: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    tableName: 'division_team',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
