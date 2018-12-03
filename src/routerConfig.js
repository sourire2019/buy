// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import NotFound from './pages/NotFound';
import Buy from './pages/Buy';
import Detail from './pages/Detail';

const routerConfig = [
  {
    path: '/',
    layout: BasicLayout,
    component: Buy,
  },
  {
    path: '/detail',
    layout: BasicLayout,
    component: Detail,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
