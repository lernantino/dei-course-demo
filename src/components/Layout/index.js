import TopBar from '../TopBar';
import Head from 'next/head';
import EmailForm from '../EmailForm';
import Header from '../Header';
import Footer from '../Footer';
import { useTheme } from '../../utils/ThemeProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from './layout.module.scss';

const Layout = ({
  pageTitle,
  description,
  previewImage,
  children,
  ...props
}) => {
  const { locale, locales, defaultLocale, pathname } = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    if (window) {
      window.document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>{pageTitle}</title>
      </Head>
      <div
        className={`${styles['page__layout']} ${
          theme === 'DEFAULT'
            ? styles['page__layout--default']
            : styles['page__layout--dark']
        }`}
      >
        <TopBar />
        <Header />
        <main className={styles['page__main-content']} dir="auto">
          {children}
          <EmailForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
