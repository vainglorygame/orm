/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ability', {
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
      allowNull: true
    },
    hero_id: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    ability: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    active: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    passive: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    tableName: 'ability',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
