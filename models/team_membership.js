/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team_membership', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    player_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    team_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    joined_on: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.ENUM('pending','initiate','member','officer','leader','former'),
      allowNull: false
    },
    fame: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'team_membership',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
