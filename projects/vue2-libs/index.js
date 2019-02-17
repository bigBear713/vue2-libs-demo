
export { VShade } from './components';
export { VPrismjs, VPrismjsService } from './directives';

import { VShade } from './components';
const COMPONENTS = [
  VShade
];

import { VPrismjs } from "./directives";
const DIRECTIVES = [
  VPrismjs
];

const Vue2Libs = {
  install: function (Vue, options) {
    for (const item of COMPONENTS) {
      Vue.component(item['name'], item);
    }
    for (const item of DIRECTIVES) {
      Vue.directive(item['name'], item);
    }
  }
};
export {
  Vue2Libs
};
