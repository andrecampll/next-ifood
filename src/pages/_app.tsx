import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store';
import GlobalStyles from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>iFood</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
