/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('build', {
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
    item_1: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    item_2: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    item_3: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    item_4: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    item_5: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    item_6: {
      type: DataTypes.STRING(191),
      allowNull: true
    }
  }, {
    tableName: 'build',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
