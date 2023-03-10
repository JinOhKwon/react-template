import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { memo, ReactNode, useMemo } from 'react';
import { getDesignTokens, themeConfig } from '../../config/ThemeConfig';
import { ThemeType } from '../../config/ThemeConfigType';

/**
 * 멘토 테마 제공 소품
 */
interface ThemeProviderProps {
  /**
   * react node
   */
  children: ReactNode;
}

/**
 * 메타리얼 캐시 설정
 */
const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

/**
 * 멘토 테마 제공
 *
 * @param props 소품
 */
const ThemeProvider = (props: ThemeProviderProps) => {
  /**
   * 소품
   */
  const { children } = props;
  /**
   * 다크모드 검색
   */
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  /**
   * 현재 테마 설정
   */
  let theme: ThemeType = useMemo(() => createTheme(getDesignTokens(prefersDarkMode ? 'light' : 'light')), [prefersDarkMode]);

  theme = createTheme({
    ...theme,
    ...themeConfig,
  });

  return (
    <CacheProvider value={muiCache}>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </CacheProvider>
  );
};

export default memo(ThemeProvider);
