import '../styles/globals.css';
import PropTypes from 'prop-types';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;
MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.element.isRequired,
};
export default MyApp;
