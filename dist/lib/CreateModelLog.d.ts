declare type Type = "created" | "updated" | "deleted";
interface Options {
    userIdKey: string;
    modelLogName: string;
}
export default class CreateModelLog {
    userIdKey: string;
    modelLogName: string;
    type: Type;
    models: any;
    instance: any;
    model: any;
    actionType: string;
    attributes: string[] | any;
    /**
     * @constructor
     * @param  {Type} type type of model to create [e.g. "created", "updated", "deleted"]
     * @param  {any} models sequelize models
     * @param  {any} instance sequelize instance
     * @param  {any} model sequelize model
     * @param  {Options} options options class
     * @param  {string} options.userIdKey key of the user id reference, default "user_id"
     * @param  {string} options.modelLogName name of the model log, default "model_log"
     */
    constructor(type: Type, models: any, instance: any, model: any, options?: Options);
    /**
     * @returns {Promise} void
     */
    Created: () => Promise<void>;
    /**
     * @returns {Promise} void
     */
    Updated: () => Promise<void>;
    /**
     * @returns {Promise} void
     */
    Deleted: () => Promise<void>;
}
export {};
