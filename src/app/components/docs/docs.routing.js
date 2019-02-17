import shadeDemoRouting from './../shade-demo/shade-demo.routing';
import { PrismjsDemo } from "./../prismjs-demo/prismjs-demo.routing";
import axios from 'axios';
const docsRouting = {
    path: '/docs',
    component: () => import('./docs.vue'),
    beforeEnter(to, from, next) {
        const menuDataUrl = './static/app/docs/json/menu.data.json';
        axios.get(menuDataUrl).then(menuData => {
            const config = {
                menuData: menuData.data
            };
            Reflect.set(to.params, 'config', config);
            next();
        });
    },
    children: [
        PrismjsDemo,
        shadeDemoRouting,
        {
            path: '/*',
            redirect: 'v-shade'
        }
    ]
};
export default docsRouting;
