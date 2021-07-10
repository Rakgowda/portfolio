import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'nprogress/nprogress.css'; //styles of nprogress
import NProgress from 'nprogress'; //nprogress module

import Router from 'next/router';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  
Router.events.on('routeChangeComplete', () => {
  window.document.querySelector("#__next > div > div > div.jsx-4090420967.Layout_divBc__SRBVA.col-sm-8.Layout_centerScreen__2w8H5").scrollTop = 0;
})
import Layout from "../components/layout"
function MyApp({ Component, pageProps }) {

  
  return (
    <Layout>
<Component {...pageProps} />
    </Layout>
  )
  
}
// componentDidMount() {
//   );
// }
export default MyApp
