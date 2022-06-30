"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiGetPreviousDataValue = exports.MultiGetDataValue = void 0;
var MultiGetDataValue = function (instance, value) {
    if (value === void 0) { value = []; }
    return value.map(function (v) { return instance.getDataValue(v); });
};
exports.MultiGetDataValue = MultiGetDataValue;
var MultiGetPreviousDataValue = function (instance, value) {
    if (value === void 0) { value = []; }
    return value.map(function (v) { return instance.previous(v); });
};
exports.MultiGetPreviousDataValue = MultiGetPreviousDataValue;
