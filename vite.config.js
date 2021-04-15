
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
const path = require('path')
// https://vitejs.dev/config/
const resolve = {
  alias: [
    { find: '@/', replacement: `${path.resolve(__dirname, '.', 'src')}/` }
  ]
}
const root = process.cwd()
const server = {
  port: 8080,
  hmr: {
    overlay: true,
  },
  // open: '/auth',
}
//直接获取文件的text
const rawTransform =  (fileRegex) => {
  return {
    name: 'get-file-raw',
    transform: (src, id) => {
      if (fileRegex.filter((re) => re.test(id)).length > 0) {
        return `export default ${JSON.stringify(src)}`;
      }
    }
  }
}
export default ({ command, mode }) => {
  return {
    resolve,
    server,
    root,
    //build,
    plugins: [vue(), rawTransform([/\.bpmn$/]), vueJsx()],
  }
}
