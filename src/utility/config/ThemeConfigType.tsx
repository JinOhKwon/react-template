import { Palette, Theme, Transitions } from '@mui/material';
import { Mixins } from '@mui/material/styles/createMixins';
import { ZIndex } from '@mui/material/styles/zIndex';
import { Breakpoints, Shape, Spacing } from '@mui/system';

/**
 * 테마 상속
 *
 * @description 타입을 추가 하려면 @types 아래에 theme.d.ts Theme 인터페이스에 추가
 */
export interface ThemeType extends Theme {
  /**
   * 색상
   */
  palette: Palette;
  /**
   * 간격
   */
  spacing: Spacing;
  /**
   * 모양
   */
  shape: Shape;
  /**
   * 중단점
   */
  breakpoints: Breakpoints;
  /**
   * mixins
   */
  mixins: Mixins;
  /**
   * 전환
   */
  transitions: Transitions;
  /**
   * css 속성 zIndex
   */
  zIndex: ZIndex;
  /**
   * strict mode 설정
   */
  unstable_strictMode?: boolean;
}
