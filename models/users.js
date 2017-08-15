/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
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
    user_token: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    player_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    remember_token: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    access_type: {
      type: DataTypes.ENUM('free','loyal','plus','premium'),
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
