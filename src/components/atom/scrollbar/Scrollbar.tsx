import { forwardRef, ReactNode, useEffect, useRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useLocation } from 'react-router-dom';

/**
 * 스크롤바 소품
 */
interface ScrollbarProps {
  /**
   * 리액 노드
   */
  children: ReactNode;
  /**
   * 스크롤 탑 여부
   */
  scrollToTop?: boolean;
  [x: string]: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Scrollbar = forwardRef((props: ScrollbarProps, ref: any) => {
  /**
   * 소품
   */
  const { children, scrollToTop = true, ...others } = props;
  /**
   * 스크롤바 DOM
   */
  let _scrollBarRef = useRef<HTMLElement>(null);
  /**
   * path 이름
   */
  const { pathname } = useLocation();
  useEffect(() => {
    if (scrollToTop && _scrollBarRef) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      _scrollBarRef._container.scrollTop = 0;
    }
  }, [_scrollBarRef, pathname, scrollToTop]);
  return (
    <PerfectScrollbar
      ref={(ref: any) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _scrollBarRef = ref;
      }}
      {...others}>
      {children}
    </PerfectScrollbar>
  );
});

export default Scrollbar;
