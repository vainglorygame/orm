/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tournament_participants', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tournament_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tournament_team_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    player_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    }
  }, {
    tableName: 'tournament_participants',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
