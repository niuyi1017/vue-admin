export const validatePassword = () => {
  return (rule, value, callback) => {
    console.log(value)
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
