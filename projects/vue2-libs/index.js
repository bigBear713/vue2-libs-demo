import { VShade } from './components';
export { VShade } from './components';
const components = [
  VShade
];

const Vue2Libs = {
  install: function (Vue, options) {
    for (const item of components) {
      Vue.component(item['name'], item);
    }
  }
};
export {
  Vue2Libs
};
