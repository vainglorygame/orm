#!/usr/bin/node
"use strict";

const mappings_source = require("./mappings_source.js"),
    mappings = new Map(Object.entries(mappings_source));

for (let entry of new Set(Object.values(mappings_source))) {
    // add clean name -> clean name
    mappings.set(entry, entry);
}

module.exports = {
    map: mappings,
    // TODO wtf?
    isItem: (str) => str.indexOf("Item") != -1,
    isAbility: (str) => {
        if (str.indexOf("Item") == -1 &&
        (str.indexOf("Ability") != -1 ||
            str.indexOf("ABILITY") != -1) ) {
            return true
        } return false; },
    crashIfBullshit: (str) => {
        if(!mappings.has(str)) {
            throw "unknown API string `" + str + "`";
        }
        return true;
    },
    isHero: (str) => str.indexOf("*") != -1 && str.indexOf("Item") == -1
};
