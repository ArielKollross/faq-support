const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home'),
    },
    {
      path: '/faq',
      name: 'Faq',
      component: () => import('../pages/Faq'),
    },
    {
      path: '/login-adm',
      name: 'Login',
      component: () => import('../pages/Login'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../pages/Dashboard'),
    },
    {
      path: '/questions',
      name: 'ListQuestions',
      component: () => import('../pages/ListQuestions'),
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../pages/FaqRegister'),
    },
    {
      path: '/respostas',
      name: 'Answers',
      component: () => import('../pages/Answer'),
    },
    {
      path: '/submit-answer',
      name: 'createAnswer',
      component: () => import('../pages/CreateAnswer'),
    }
  ];

  export default routes;