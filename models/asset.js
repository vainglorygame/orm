/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asset', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: true
    },
    shard_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    match_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    content_type: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    tableName: 'asset',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
