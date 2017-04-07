/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('game_mode', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'game_mode',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
