/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roster_ext', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    roster_api_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    tableName: 'roster_ext',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
