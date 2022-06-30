"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiGetPreviousDataValue = exports.MultiGetDataValue = void 0;
/**
 * @param   {any} instance
 * @param   {string[]} value
 * @returns {string[]} string[]
 */
var MultiGetDataValue = function (instance, value) {
    return value.map(function (v) { return instance.getDataValue(v); });
};
exports.MultiGetDataValue = MultiGetDataValue;
/**
 * @param   {any} instance
 * @param   {string[]} value
 * @returns {string[]} string[]
 */
var MultiGetPreviousDataValue = function (instance, value) {
    return value.map(function (v) { return instance.previous(v); });
};
exports.MultiGetPreviousDataValue = MultiGetPreviousDataValue;
