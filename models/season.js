/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('season', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    api_id: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    league_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    start: {
      type: DataTypes.TIME,
      allowNull: true
    },
    end: {
      type: DataTypes.TIME,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('planned','pre-season','in-season','post-season'),
      allowNull: false
    }
  }, {
    tableName: 'season',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
