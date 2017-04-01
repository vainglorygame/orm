/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asset', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    match_api_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    api_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    content_type: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(191),
      allowNull: true
    }
  }, {
    tableName: 'asset',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
