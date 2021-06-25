import { UserProvider } from '@auth0/nextjs-auth0';
import { ThemeProvider } from '../utils/ThemeProvider';

import 'normalize.css';
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
