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
    constructor(type: Type, models: any, instance: any, model: any, options: Options);
    Created: () => Promise<void>;
    Updated: () => Promise<void>;
    Deleted: () => Promise<void>;
}
export {};
