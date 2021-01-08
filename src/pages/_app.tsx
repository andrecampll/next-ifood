import Head from 'next/head';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from '../store';
import GlobalStyles from '../styles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>iFood</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />

      <ToastContainer />
    </Provider>
  );
}
