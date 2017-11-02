#!/usr/bin/node

var SequelizeAuto = require("sequelize-auto")

var auto = new SequelizeAuto("vainweb", "vain", "vain", {
    host: "localhost",
    dialect: "mariadb",
    directory: "models",
    additional: {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    },
    indentation: 2,
    spaces: true
})

auto.run(function (err) {
  if (err) throw err;
});
