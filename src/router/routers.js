import docsRouting from './../app/components/docs/docs.routing';
export default [
  docsRouting,
  {
    path: '*',
    redirect: '/docs'
  }
];
