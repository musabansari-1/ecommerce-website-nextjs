import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import LeaderBoard from './leaderBoard';
import { useStateContext } from '@/context/StateContext';

const Layout = ({children}) => {
  const {showLeaderBoard} = useStateContext();
  return (
    <>
    {showLeaderBoard && <LeaderBoard/>}
    <div style={{backgroundColor: 'white', color: 'black'}}>
      <Head>
        <title>Ecommerce Website</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main >
        {children}
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default Layout
