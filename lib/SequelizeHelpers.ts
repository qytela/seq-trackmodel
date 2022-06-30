export const MultiGetDataValue = (instance: any, value = []) => value.map(v => instance.getDataValue(v));
export const MultiGetPreviousDataValue = (instance: any, value = []) => value.map(v => instance.previous(v));
