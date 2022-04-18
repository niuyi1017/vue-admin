import SvgIcon from '../../components/svgIcon/index.vue'
const svgRequire = require.context('./', false, /\.svg$/)
console.log(svgRequire.keys())
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

export default app => {
  app.component('svg-icon', SvgIcon)
}
