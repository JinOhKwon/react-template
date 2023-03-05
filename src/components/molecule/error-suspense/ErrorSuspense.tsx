import { ReactNode } from 'react';
import { ErrorBoundary } from '../../atom';
import MmtSuspense from '../suspense/MmtSuspense';

interface ErrorSuspenseProps {
  /**
   * react node
   */
  children?: ReactNode;
}

const ErrorSuspense = (props: ErrorSuspenseProps) => {
  /**
   * 소품
   */
  const { children } = props;

  return (
    <MmtSuspense>
      <ErrorBoundary>{children}</ErrorBoundary>
    </MmtSuspense>
  );
};

export default ErrorSuspense;
