import * as SequelizeHelpers from "./SequelizeHelpers";

type Type = "created" | "updated" | "deleted";

interface Options {
  userIdKey: string;
  modelLogName: string;
}

export default class CreateModelLog {
  /*
    @Param {Object} type - type of model to create [e.g. "created", "updated", "deleted"]
    @Param {Object} models - sequelize models
    @Param {Object} instance - sequelize instance
    @Param {Object} model - sequelize model
    @param {Object} userIdKey - key of the user id reference, default "user_id"
    @param {Object} modelLogName - name of the model log, default "ModelLog"
  */

  userIdKey: string;
  modelLogName: string;

  type: Type;
  models: any;
  instance: any;
  model: any;

  actionType: string;
  attributes: string[] | any;

  constructor(type: Type, models: any, instance: any, model: any, options?: Options) {
    this.userIdKey = "user_id";
    this.modelLogName = "ModelLog";

    if (options) {
      if (options.userIdKey) this.userIdKey = options.userIdKey;
      if (options.modelLogName) this.modelLogName = options.modelLogName;
    }

    this.type = type;
    this.models = models;
    this.instance = instance;
    this.model = model;

    this.actionType = `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} ${this.model.name}`;

    this.attributes = [];
    for (let key in this.model.rawAttributes) {
      this.attributes.push(key);
    }

    if (type === "created") this.Created();
    if (type === "updated") this.Updated();
    if (type === "deleted") this.Deleted();
  }

  Created = async (): Promise<void> => {
    const value = SequelizeHelpers.MultiGetDataValue(this.instance, this.attributes);
    const data = Object.keys(this.attributes).map((i: any) => ({
      key: this.attributes[i],
      value: value[i]
    }));

    const createdBy =
      data.filter(i => i.key === this.userIdKey).length > 0
        ? data.filter(i => i.key === this.userIdKey)[0].value
        : null;

    try {
      await this.models[this.modelLogName].create({
        model_name: this.model.name,
        action_type: this.actionType,
        new_data: JSON.stringify(data),
        createdby: createdBy
      });
    } catch (error) {
      console.log(error);
    }
  };

  Updated = async (): Promise<void> => {
    const newValue = SequelizeHelpers.MultiGetDataValue(this.instance, this.attributes);
    const oldValue = SequelizeHelpers.MultiGetPreviousDataValue(this.instance, this.attributes);

    const newData = Object.keys(this.attributes).map((i: any) => ({
      key: this.attributes[i],
      value: newValue[i]
    }));
    const oldData = Object.keys(this.attributes).map((i: any) => ({
      key: this.attributes[i],
      value: oldValue[i]
    }));

    const createdBy =
      newData.filter(i => i.key === this.userIdKey).length > 0
        ? newData.filter(i => i.key === this.userIdKey)[0].value
        : null;

    try {
      await this.models[this.modelLogName].create({
        model_name: this.model.name,
        action_type: this.actionType,
        old_data: JSON.stringify(oldData),
        new_data: JSON.stringify(newData),
        createdby: createdBy
      });
    } catch (error) {
      console.log(error);
    }
  };

  Deleted = async (): Promise<void> => {
    const value = SequelizeHelpers.MultiGetDataValue(this.instance, this.attributes);
    const data = Object.keys(this.attributes).map((i: any) => ({
      key: this.attributes[i],
      value: value[i]
    }));

    const createdBy =
      data.filter(i => i.key === this.userIdKey).length > 0
        ? data.filter(i => i.key === this.userIdKey)[0].value
        : null;

    try {
      await this.models[this.modelLogName].create({
        model_name: this.model.name,
        action_type: this.actionType,
        old_data: JSON.stringify(data),
        new_data: null,
        createdby: createdBy
      });
    } catch (error) {
      console.log(error);
    }
  };
}
