#!/usr/bin/node

"use strict";

var item_source = require("./items_source.js");
var items = new Map();

item_source.map((entry) => {
    items[entry.serverName] = entry.name;
    items[entry.name] = entry.name;
});

module.exports = items;
