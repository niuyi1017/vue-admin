import { getItem, setItem } from './storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUR } from './constant'

const getTimeStamp = path => {
  return getItem(TIME_STAMP)
}
const setTimeStamp = path => {
  setItem(TIME_STAMP, Date.now())
}

const isTokenTimeout = () => {
  const currentTimeStamp = Date.now()
  const timeStamp = getTimeStamp()
  return (currentTimeStamp - timeStamp) > TOKEN_TIMEOUT_VALUR
}

const isString = function(arg) {
  return typeof (arg) === 'string'
}
const isObject = function(arg) {
  return typeof (arg) === 'object' && arg !== null
}
const isNull = function(arg) {
  return arg === null
}
const isNullOrUndefined = function(arg) {
  return arg == null
}
export {
  setTimeStamp,
  isTokenTimeout,
  isString,
  isObject,
  isNull,
  isNullOrUndefined

}
