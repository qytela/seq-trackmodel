/**
 * @param   {any} instance
 * @param   {string[]} value
 * @returns {string[]} string[]
 */
export const MultiGetDataValue = (instance: any, value: string[]): string[] =>
  value.map(v => instance.getDataValue(v));

/**
 * @param   {any} instance
 * @param   {string[]} value
 * @returns {string[]} string[]
 */
export const MultiGetPreviousDataValue = (instance: any, value: string[]): string[] =>
  value.map(v => instance.previous(v));
