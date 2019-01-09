import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '仪表盘',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: '全局设置',
    icon: 'nb-shuffle',
    link: '/pages/setting',
  },
  {
    title: '公告管理',
    icon: 'nb-shuffle',
    link: '/pages/announcement',
  },
  {
    title: '文章管理',
    icon: 'nb-compose',
    children: [
      {
        title: '所有文章',
        link: '/pages/article/list',
      },
      {
        title: '分类目录',
        link: '/pages/article/category',
      },
      {
        title: '发布文章',
        link: '/pages/article/create',
      },
      {
        title: '文章标签',
        link: 'pages/article/tag',
      },
    ],
  },
  {
    title: '评论管理',
    icon: 'nb-shuffle',
    children: [
      {
        title: '所有评论',
        link: '/pages/comment/all',
      },
      {
        title: '留言评论',
        link: '/pages/article/category',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
];
