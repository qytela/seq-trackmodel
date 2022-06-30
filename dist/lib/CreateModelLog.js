"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SequelizeHelpers = __importStar(require("./SequelizeHelpers"));
var CreateModelLog = /** @class */ (function () {
    /*
      @Param {Object} type - type of model to create [e.g. "created", "updated", "deleted"]
      @Param {Object} models - sequelize models
      @Param {Object} instance - sequelize instance
      @Param {Object} model - sequelize model
      @param {Object} userIdKey - key of the user id reference, default "user_id"
      @param {Object} modelLogName - name of the model log, default "ModelLog"
    */
    function CreateModelLog(type, models, instance, model, options) {
        var _this = this;
        this.Created = function () { return __awaiter(_this, void 0, void 0, function () {
            var value, data, createdBy, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = SequelizeHelpers.MultiGetDataValue(this.instance, this.attributes);
                        data = Object.keys(this.attributes).map(function (i) { return ({
                            key: _this.attributes[i],
                            value: value[i]
                        }); });
                        createdBy = data.filter(function (i) { return i.key === _this.userIdKey; }).length > 0
                            ? data.filter(function (i) { return i.key === _this.userIdKey; })[0].value
                            : null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.models[this.modelLogName].create({
                                model_name: this.model.name,
                                action_type: this.actionType,
                                new_data: JSON.stringify(data),
                                createdby: createdBy
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.Updated = function () { return __awaiter(_this, void 0, void 0, function () {
            var newValue, oldValue, newData, oldData, createdBy, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newValue = SequelizeHelpers.MultiGetDataValue(this.instance, this.attributes);
                        oldValue = SequelizeHelpers.MultiGetPreviousDataValue(this.instance, this.attributes);
                        newData = Object.keys(this.attributes).map(function (i) { return ({
                            key: _this.attributes[i],
                            value: newValue[i]
                        }); });
                        oldData = Object.keys(this.attributes).map(function (i) { return ({
                            key: _this.attributes[i],
                            value: oldValue[i]
                        }); });
                        createdBy = newData.filter(function (i) { return i.key === _this.userIdKey; }).length > 0
                            ? newData.filter(function (i) { return i.key === _this.userIdKey; })[0].value
                            : null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.models[this.modelLogName].create({
                                model_name: this.model.name,
                                action_type: this.actionType,
                                old_data: JSON.stringify(oldData),
                                new_data: JSON.stringify(newData),
                                createdby: createdBy
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.Deleted = function () { return __awaiter(_this, void 0, void 0, function () {
            var value, data, createdBy, error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = SequelizeHelpers.MultiGetDataValue(this.instance, this.attributes);
                        data = Object.keys(this.attributes).map(function (i) { return ({
                            key: _this.attributes[i],
                            value: value[i]
                        }); });
                        createdBy = data.filter(function (i) { return i.key === _this.userIdKey; }).length > 0
                            ? data.filter(function (i) { return i.key === _this.userIdKey; })[0].value
                            : null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.models[this.modelLogName].create({
                                model_name: this.model.name,
                                action_type: this.actionType,
                                old_data: JSON.stringify(data),
                                new_data: null,
                                createdby: createdBy
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.userIdKey = options.userIdKey;
        this.modelLogName = options.modelLogName;
        this.type = type;
        this.models = models;
        this.instance = instance;
        this.model = model;
        this.actionType = "".concat(this.type.charAt(0).toUpperCase() + this.type.slice(1), " ").concat(this.model.name);
        this.attributes = [];
        for (var key in this.model.rawAttributes) {
            this.attributes.push(key);
        }
        if (type === "created")
            this.Created();
        if (type === "updated")
            this.Updated();
        if (type === "deleted")
            this.Deleted();
    }
    return CreateModelLog;
}());
exports.default = CreateModelLog;
