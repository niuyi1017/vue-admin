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
export {
  setTimeStamp,
  isTokenTimeout
}
