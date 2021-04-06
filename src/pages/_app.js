import PropTypes from 'prop-types';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.object,
};

export default MyApp;
