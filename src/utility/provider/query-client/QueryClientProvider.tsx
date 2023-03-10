import { QueryClient, QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

interface QueryClientProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: false,
      retry: 0,
    },
  },
});

const QueryClientProvider = (props: QueryClientProviderProps) => {
  const { children } = props;
  return (
    <TanstackQueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </TanstackQueryClientProvider>
  );
};

export { queryClient, QueryClientProvider };
