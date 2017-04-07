/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_participant', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    participant_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    item_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    action: {
      type: DataTypes.ENUM('grant','sell','use','final'),
      allowNull: false
    },
    time_from_start: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'item_participant',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
