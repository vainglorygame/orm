/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participant_phases', {
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
    start: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    end: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    participant_api_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    dmg_true: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_dealt: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_rcvd_dealt: {
      type: "DOUBLE",
      allowNull: true
    },
    dmg_rcvd_true: {
      type: "DOUBLE",
      allowNull: true
    },
    draft_position: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ban: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pick: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    heal_heal: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_healed: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_rcvd_heal: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_rcvd_healed: {
      type: "DOUBLE",
      allowNull: true
    },
    heal_rcvd_vamp: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'participant_phases',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
