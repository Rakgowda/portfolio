import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Router from 'next/router';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

import Layout from "../components/layout"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
<Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
