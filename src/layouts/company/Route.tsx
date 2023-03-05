import { FC, lazy, LazyExoticComponent } from 'react';
import { Route } from '../LayoutRoute';

/**
 * 대시보드 컴포넌트
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const Layout: LazyExoticComponent<FC<{}>> = lazy(() => import('./Layout'));

/**
 * 회사 라우팅
 */
export const baseRoute: Route[] = [
  {
    path: '',
    element: <Layout />,
    roles: [],
    isAuth: false,
    children: [],
  },
];
