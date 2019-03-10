
export {
  VShade,
  VPerfectScrollbar,
  SCROLL_DIRECTION,
  VPerfectScrollbarService
} from './components';
export { VPrismjs, VPrismjsService } from './directives';
export { EventListenService } from './services';

import {
  VShade,
  VPerfectScrollbar,
} from './components';
const COMPONENTS = [
  VShade,
  VPerfectScrollbar
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
