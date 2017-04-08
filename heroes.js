#!/usr/bin/node

"use strict";

var heroes_source = require("./heroes_source.js");
var heroes = {}

heroes_source.map((entry) => {
    heroes[entry.serverName] = entry.name;
    heroes[entry.name] = entry.name;
});

module.exports = heroes;
