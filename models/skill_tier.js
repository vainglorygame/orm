/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill_tier', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    start: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    end: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  }, {
    tableName: 'skill_tier',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
