import React from 'react';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AuthRoutes from './utility/hooks/useAuthRoutes';
import MmtLocaleProvider from './utility/provider/locale/MmtLocaleProvider';
import MmtThemeProvider from './utility/provider/theme/MmtThemeProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorSuspense } from './components/molecule';
import { LayoutRoute } from './layouts/LayoutRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <MmtThemeProvider>
          <MmtLocaleProvider>
            <BrowserRouter>
              <ErrorSuspense>
                <AuthRoutes>
                  <LayoutRoute />
                  <CssBaseline />
                </AuthRoutes>
              </ErrorSuspense>
            </BrowserRouter>
          </MmtLocaleProvider>
        </MmtThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
