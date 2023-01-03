import '../styles/globals.css';
import Layouts from '../Components/Layouts';

function MyApp({ Component, pageProps }) {
  return(
  <Layouts>
    <Component {...pageProps} />
  </Layouts>
  )
};

export default MyApp;