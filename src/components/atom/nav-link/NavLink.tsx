import React, { forwardRef, Ref } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

/**
 * 네비게이션 이동(forwarRef는 현재 자신이 클릭한 상태에 값을 가져오기 위함)
 */
const NavLink = forwardRef((props: any, ref: Ref<HTMLAnchorElement>) => {
  return <RouterNavLink innerref={ref} {...props} />;
});

export default NavLink;
