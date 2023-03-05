import React, { FC, ReactNode, Suspense as ReactSuspense } from 'react';
import Loader from '../../atom/loader/Loader';

/**
 * suspense 소품
 */
interface SuspenseProps {
  /**
   * react node
   */
  children: ReactNode;
}

/**
 * react suspense
 *
 * @param props 소품
 */
const Suspense: FC<SuspenseProps> = (props) => {
  const { children } = props;
  return <ReactSuspense fallback={<Loader />}>{children}</ReactSuspense>;
};

export default Suspense;
