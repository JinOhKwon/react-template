import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ErrorSuspense } from './components/molecule';
import { LayoutRoute } from './layouts/LayoutRoute';
import AuthRoutes from './utility/hooks/useAuthRoutes';
import LocaleProvider from './utility/provider/locale/LocaleProvider';
import { QueryClientProvider } from './utility/provider/query-client/QueryClientProvider';
import ThemeProvider from './utility/provider/theme/ThemeProvider';

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider>
        <ThemeProvider>
          <LocaleProvider>
            <BrowserRouter>
              <ErrorSuspense>
                <AuthRoutes>
                  <LayoutRoute />
                  <CssBaseline />
                </AuthRoutes>
              </ErrorSuspense>
            </BrowserRouter>
          </LocaleProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
