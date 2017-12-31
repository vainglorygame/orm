/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'role',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
