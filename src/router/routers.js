export default [{
  path: '/docs',
  component: () => import('./../app/components/docs/docs.vue'),
  children: [{
    path: 'v-shade',
    component: () => import('./../app/components/shade-demo/shade-demo.vue'),
  },
  {
    path: '/*',
    redirect: 'v-shade'
  }
  ]
},
{
  path: '*',
  redirect: '/docs'
}];
