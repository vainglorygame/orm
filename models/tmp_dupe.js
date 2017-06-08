/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_dupe', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tmp_dupe',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
