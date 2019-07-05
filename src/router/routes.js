export default [
  {
    path: "/",
    meta: { public: true },
    name: "Hello",
    component: () =>
      import(
        /* webpackChunkName: "helloWorld"*/
        "@/pages/Hello.vue"
      )
  },
  {
    path: "/sample",
    meta: { public: true },
    name: "Sample",
    component: () =>
      import(
        /* webpackChunkName: "sample"*/
        "@/pages/Sample.vue"
      )
  }
];
