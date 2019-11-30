/** @module resolve-any */

import {isFunction} from "lodash"

/**
 * Returns given value. If `value` is a function, returns its return value. If `value` is a `Promise`, returns its resolved value.
 * @example
 * import resolveAny from "resolve-any"
 * const result = resolveAny("hello")
 * result === "hello"
 * import resolveAny from "resolve-any"
 * const result = resolveAny(() => "world")
 * result === "world"
 * @async
 * @param {*} value
 * @param {...*} args If value is a function, it will be called with these arguments
 * @returns {*} Resolved value
 */
export default async (value, ...args) => {
  if (isFunction(value)) {
    return value(...args)
  }
  return value
}

/**
 * Returns given value. If `value` is a function, returns its return value.
 * @example
 * import {resolveSync} from "resolve-any"
 * const result = resolveSync("hello")
 * result === "hello"
 * import {resolveSync} from "resolve-any"
 * const result = resolveSync(() => "world")
 * result === "world"
 * @param value
 * @param {...*} args If value is a function, it will be called with these arguments
 * @returns {*} Resolved value
 */
export const resolveSync = (value, ...args) => {
  if (isFunction(value)) {
    return value(...args)
  }
  return value
}