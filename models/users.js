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
      allowNull: false,
      defaultValue: '-1'
    },
    player_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      defaultValue: ''
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    remember_token: {
      type: DataTypes.STRING(255),
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
