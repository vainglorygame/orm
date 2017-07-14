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
    dimension_on: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    database: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    item_1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    item_2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    item_3: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    item_4: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    item_5: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    item_6: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    item_1_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    item_2_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    item_3_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    item_4_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    item_5_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    item_6_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'build',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
};
