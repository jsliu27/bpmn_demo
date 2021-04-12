
import vue from '@vitejs/plugin-vue'
const path = require('path')
// https://vitejs.dev/config/
const resolve = {
  alias: [
    { find: '@/', replacement: `${path.resolve(__dirname, '.', 'src')}/` }
  ]
}

const server = {
  port: 8080,
  hmr: {
    overlay: true,
  },
  // open: '/auth',
}
export default ({ command, mode }) => {
  return {
    resolve,
    server,
    //build,
    plugins: [vue()],
  }
}
