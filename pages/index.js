import React from 'react';
import Product from '@/components/Product';
import { useStateContext } from '@/context/StateContext';


const Home = () => {
  const {products} = useStateContext();
  return (
    <>
    <div className='banner-container'>
      <img src='/banner1.png' />
    </div>
    <div className='row products-container'>
      {products.map(product => {
        return (
          <Product product={product}/>
        )
      })}
    </div>
    </>
  )
}

export default Home
