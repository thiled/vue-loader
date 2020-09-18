import 'https://cdn.jsdelivr.net/npm/vue-router';
import VueLoader from '../../vue-loader/index.js';

const Page = () => VueLoader.load('./views/page/index.vue');
const Page2 = () => VueLoader.load('./views/page2/index.vue');

const routes = [
  { path: '/page2', component: Page2 },
  { path: '/', component: Page },
];
export default new VueRouter({
  routes,
});
