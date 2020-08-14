const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home'),
    },
    {
      path: '/faq',
      name: 'Faq',
      component: () => import('../pages/ClientUser/Faq'),
    },
    {
      path: '/login-adm',
      name: 'Login',
      component: () => import('../pages/Login'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../pages/ManagerUser/Dashboard'),
    },
    {
      path: '/questions',
      name: 'ListQuestions',
      component: () => import('../pages/ManagerUser/ListQuestions'),
        // children: [{
        //   path: ':id',
        //   name: 'ListQuestionsDetails',
        //   component: () => import('../pages/ManagerUser/QuestionDetails'),
        // }],
    },
    {
      path: '/questions/:id',
      name: 'ListQuestionsDetails',
      component: () => import('../pages/ManagerUser/QuestionDetails'),
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../pages/ClientUser/FaqRegister'),
    },
    {
      path: '/duvida/:id',
      name: 'Answers',
      component: () => import('../pages/ClientUser/Answer'),
    },
    {
      path: '/submit-answer',
      name: 'createAnswer',
      component: () => import('../pages/ManagerUser/CreateAnswer'),
    }
  ];

  export default routes;