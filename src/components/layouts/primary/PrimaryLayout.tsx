import Head from 'next/head';
import React from 'react';
import styles from './PrimaryLayout.module.css';

export interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({children}) => {
  return (
    <>
      <Head>
        <title>primary layout</title>
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
}

export default PrimaryLayout;