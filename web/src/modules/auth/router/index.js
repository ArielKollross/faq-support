import Login from '../pages/Login';

export default [
  {
    path: '/login-adm',
    name: Login,
    component: Login,
   //component: () => (/* webpackChunkName: "Login" */ '../pages/Login'),
  },
];