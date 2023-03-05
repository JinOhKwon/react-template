import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AuthRoutesProps {
  children: ReactNode;
}

/**
 * 인증 라우트
 * 
 * @param props AuthRoutesProps 자식노드
 */
const AuthRoutes = (props: AuthRoutesProps) => {
  const { children } = props;
  // /**
  //  * react router Hook
  //  */
  // const navigate = useNavigate();
  /**
   * 경로
   */
  const { pathname } = useLocation();

  /**
   * react effect
   */
  useEffect(() => {
    /**
     * 로그아웃 체크
     */
    function logoutCheck() {
      // TODO 서버에 토큰 유효한지 확인 로직 필요!
      // TODO Route 이동 로직 필요
      // 1. 로그인이 안되어 있을 경우...
      // 1.1 공통 메인화면 레이아웃으로 이동
      // 1.2 만약 구직자, 멘토, 기업 기준에서 로그인 되지 않아도 보는 화면이 있다면 구현 필요
      // 2. 로그인이 되었으면...
      // 2.1 로그인 된 사용자는 역할을 route에 할당 하는 로직 필요
      // 2.2 로그인 된 사용자는 각 구직자, 기업, 멘토에 맞게 레이아웃 이동 필요
      // routes.forEach((route) => {
      //   // 패스가 동일 하면서... 페이지가 로그인 필수인 화면이고 ... 마지막으로 로그인 되어있는지
      //   if (pathname === route.path && route.isAuth && objectUtil.isEmptyObj(auth)) {
      //     delete httpClient.defaults.headers.common['X-Auth-Token'];
      //     navigate(CommonNavigatePath.MAIN);
      //   }
      // });
    }
    logoutCheck();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <>{children}</>;
};

export default AuthRoutes;
