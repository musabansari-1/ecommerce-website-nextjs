import React, { useEffect } from 'react'
import {BsFillBagCheckFill} from 'react-icons/bs';
import Link from 'next/link';
import { runFireWorks } from '@/lib/utils';
import { useStateContext } from '@/context/StateContext';

const success = () => {
  const {currentOrder, setCurrentOrder} = useStateContext();

  console.log('currentOrder: ');
  console.log(currentOrder);

  useEffect(() => {
    runFireWorks();
    const storedData = localStorage.getItem('currentOrder');
     const parsedData = JSON.parse(storedData);
     console.log("Local storage item: ");
     console.log(parsedData);
    setCurrentOrder(parsedData);
  },[])
    
  return (
    
    <div className='d-flex flex-column card order-success-container align-items-center'>
      <h3>Payment successful. Your order has been placed.</h3>
      <BsFillBagCheckFill size={70} color='orangered'/>
      <h3>You received {Math.floor((currentOrder.amount_total)/10000)} points</h3>
      <Link href="/"><button className='custom-btn'>Continue Shopping</button></Link>
    </div>
  )
}

export default success
