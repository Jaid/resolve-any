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
 * @param value
 * @returns {*} Resolved value
 */
export default async value => {
  const returnedValue = isFunction(value) ? value() : value
  return returnedValue
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
 * @returns {*} Resolved value
 */
export const resolveSync = value => {
  if (value |> isFunction) {
    return value()
  }
  return value
}