import { Navigate, NonIndexRouteObject, useRoutes } from 'react-router-dom';
import { baseRoute } from './company/Route';
import { NavigatePath } from './company/constants/NavigatePath';

/**
 * role 인터페이스
 *
 * @TODO 서버 설계되면 변경
 */
interface Role {
  roleId: string;
}

/**
 * 라우트
 */
export interface Route extends NonIndexRouteObject {
  /**
   * 역할 목록
   */
  roles: Role[];
  /**
   * 인증 여부
   */
  isAuth: boolean;
  /**
   * 자식 노드
   */
  children?: Route[];
}

/**
 * 라우트 목록
 */
export const routes: Route[] = [
  ...baseRoute,
  {
    path: '/',
    // TODO: auth 처리 완료 되면 Main으로 변경할것!
    element: <Navigate replace to={NavigatePath.PATH_NAME} />,
    roles: [],
    isAuth: false,
  },
];

/**
 * 페이지 라우팅
 */
export const LayoutRoute: any = () => {
  const element = useRoutes([...routes]);
  return element;
};
