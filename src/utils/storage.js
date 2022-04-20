const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
const getItem = key => {
  let data = window.localStorage.getItem(key)
  try {
    data = JSON.parse(data)
    return data
  } catch (err) {
    return data
  }
}
const removeItem = key => {
  window.localStorage.removeItem(key)
}

const removeAllItem = () => {
  window.localStorage.clear()
}

export {
  setItem,
  getItem,
  removeItem,
  removeAllItem
}
