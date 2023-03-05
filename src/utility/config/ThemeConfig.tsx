import { createTheme, PaletteMode, PaletteOptions, ThemeOptions } from '@mui/material';

/**
 * 라이트 색상
 */
export const ligthPalette: PaletteOptions = {
  black: { main: '#000000' },
  white: { main: '#FFFFFF' },
};

/**
 * 다크 색상
 */
export const darkPalette: PaletteOptions = {
  black: { main: '#000000' },
  white: { main: '#FFFFFF' },
};

/**
 * 현재 색상모드에 맞게 반환한다.
 *
 * @param mode 색상 모드
 */
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? ligthPalette : darkPalette),
  },
  spacing: 4,
});

/**
 * 라이트 모드 여부
 */
const isLightMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * 기본테마
 */
export const defaultTheme = createTheme(getDesignTokens(isLightMode() ? 'light' : 'light'));

/**
 * 기본 폰트
 */
const defaultFont = {
  fontStyle: 'normal',
  lineHeight: '148%',
  letterSpacing: '-0.018em',
  color: 'currentColor',
  fontFamily: 'Spoqa Han Sans Neo',
};

/**
 * 테마 환경
 */
export const themeConfig: ThemeOptions = {
  spacing: 4,
  typography: {
    ...defaultFont,
    htmlFontSize: 16,
    headLineLarge: {
      ...defaultFont,
      fontWeight: 500,
      fontSize: '2rem',
    },
  },
};
