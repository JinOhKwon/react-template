/**
 * gloabal type 작성만 하세요
 *
 * @description exmaple select type, checkbox type etc... 화면 기준입니다.
 */

/**
 * 사이드바 타입
 */
export interface SidebarType {
  /**
   * 식별자
   */
  uuid: string;
  /**
   * 주소
   */
  path: string;
  /**
   * 제목
   */
  title: string;
  /**
   * 아이콘
   */
  icon?: ReactNode;
}
