import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import { StateContext } from '@/context/StateContext';
import {Toaster} from 'react-hot-toast';

import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
  <StateContext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  )
}
