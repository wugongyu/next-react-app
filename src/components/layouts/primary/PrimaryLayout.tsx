import Head from 'next/head';
import React from 'react';
import Header from '../../navigation/header/Header';
import Footer from '../../navigation/footer/Footer';

export interface PrimaryLayoutProps extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({children, justify = 'items-center', ...divProps }) => {
  return (
    <>
      <Head>
        <title>primary layout</title>
      </Head>
      <div className={`min-h-screen w-full flex flex-col ${justify}`} {...divProps}>
        <Header />
        <main>
          {children}
        </main>
        <div className='m-auto' />
        <Footer />
      </div>
    </>
  );
}

export default PrimaryLayout;