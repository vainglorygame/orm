/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('division', {
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
    stage_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    tableName: 'division',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
