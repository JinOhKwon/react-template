import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { memo, ReactNode, useMemo } from 'react';
import { getDesignTokens, themeConfig } from '../../config/ThemeConfig';
import { ThemeType } from '../../config/ThemeConfigType';

/**
 * 멘토 테마 제공 소품
 */
interface MomentorThemeProviderProps {
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
const MmtThemeProvider = (props: MomentorThemeProviderProps) => {
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
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default memo(MmtThemeProvider);
