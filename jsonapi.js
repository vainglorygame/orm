#!/usr/bin/node
/* https://github.com/alex94puchades/superagent-jsonapify/blob/master/common.js */

"use strict";

var _isUndefined = require('lodash/isUndefined');
var _isArray = require('lodash/isArray');
var _map = require('lodash/map');
var _partial = require('lodash/partial');
var _each = require('lodash/each');
var _snakecase = require('lodash/snakeCase');
var _memoize = require('lodash/memoize');
var _chain = require('lodash/chain');
var _find = require('lodash/find');
var _clone = require('lodash/clone');
var _compact = require('lodash/compact');

exports.parse = (obj) => {
    let response = obj,
        data = obj.data;
    if (!data) {
        return data;
    } else if (_isArray(data)) {
        return _map(data, _partial(parseResourceDataObject, response));
    } else {
        return parseResourceDataObject(response, data);
    }
}

function parseResourceDataObject(response, data) {
    var result = {};
    Object.defineProperty(result, "id", { value: data.id, enumerable: true });
    Object.defineProperty(result, "type", { value: data.type, enumerable: true });
    _each(data.attributes, function(value, name) {
        Object.defineProperty(result, _snakecase(name), { value: value, enumerable: true });
    });
    _each(data.relationships, function(value, name) {
        if (_isArray(value.data)) {
            Object.defineProperty(result, _snakecase(name), {
                get: _memoize(function() {
                    const related = _map(value.data, function(related) {
                        var resdata = _find(response.included, function(included) {
                            return included.id === related.id && included.type === related.type;
                        });
                        if(resdata)
                            return parseResourceDataObject(response, resdata);
                    });
                    return _compact(related);
                }),
                enumerable: true
            });
        } else if (value.data) {
            Object.defineProperty(result, _snakecase(name), {
                get: _memoize(function() {
                    var resdata = _find(response.included, function(included) {
                        return included.id === value.data.id && included.type === value.data.type;
                    });
                    return resdata ? parseResourceDataObject(response, resdata)
                                   : null;
                }),
                enumerable: true
            });
        }
    });
    return result;
}
