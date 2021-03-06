/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    api_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    series: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    is_activable: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'item',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
