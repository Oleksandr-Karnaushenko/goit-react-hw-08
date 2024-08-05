import { Suspense } from 'react';

import AppBar from '../AppBar/AppBar';

import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <main className={styles.container}>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </>
  );
}
