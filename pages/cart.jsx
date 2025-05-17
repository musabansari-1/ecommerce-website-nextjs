import React, { useEffect } from 'react';

import { useStateContext } from '@/context/StateContext';
import { AiOutlinePlus, AiOutlineMinus, AiTwotoneDelete } from 'react-icons/ai';
import getStripe from '../lib/getStripe';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

const Cart = () => {
  
    const {cartItems, onRemoveFromCart, totalPrice, totalQuantities, incQtyCart, decQtyCart, setCurrentOrder, removedItems, handleUndo} = useStateContext();
  
  

  const handleCheckout = async () => {
     const stripe = await getStripe();
     const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
     })

     if(response.statusCode === 500) return;

     const data = await response.json();
     
     
     toast.loading('Redirecting...');
     console.log('data here: ');
     console.log(data);
     const jsonData = JSON.stringify(data);
     localStorage.setItem('currentOrder', jsonData);
     
     stripe.redirectToCheckout({ sessionId: data.id});
  }
  
    console.log('inside cart');
  console.log(cartItems);

  const reversedCartItems = cartItems.slice().reverse(); 

  return (
    <div className='cart-container'>
      <div className=''>
        <h2 style={{color: 'orangered'}} className='text-center'>Shopping Cart ({totalQuantities} items)</h2>
       {removedItems.length >= 1 &&  <center><button style={{marginLeft: 'auto'}} className='custom-btn'   onClick={handleUndo}>Restore Deleted Item</button></center> }
      </div>
      {cartItems.length == 0 && 
        <div className='d-flex flex-column align-items-center cart-empty'>
          <h4>Your Cart is Empty</h4>
          <Link href="/"><button className='custom-btn'>Continue Shopping</button></Link>
        </div>
      }   
      {reversedCartItems?.map(cartItem => {
        return (
        <div className='row cart-item'>
          <img src={cartItem?.image} className='col-lg-4 cart-item-image'/>
          <div className='col-lg-8 d-flex flex-column justify-content-between'>
            <div className='row justify-content-between'>
            <h3 className='col-lg-2'>{cartItem?.name}</h3>
            <h4 className='col-lg-2'>₹{cartItem?.price}</h4>
            <p>{cartItem?.description}</p>

            </div>
            <div className='row justify-content-between'>
            <div className='col-lg-5 qty'>
            <button onClick={() => decQtyCart(cartItem)}><AiOutlineMinus color='orangered'  /></button>
            <span>{cartItem?.quantity}</span>
            <button onClick={() => incQtyCart(cartItem)}><AiOutlinePlus color='orangered' /></button>
            </div >
            <button  onClick={() => onRemoveFromCart(cartItem)} className='col-lg-2 btn'><AiTwotoneDelete color="red" size={25}/></button>
            </div>
          </div>
        </div>
      )})
    }
    {cartItems.length >= 1 && 
    <div className='d-flex flex-column justify-content-between total-price'>
      <div className='d-flex justify-content-between'>
      <h3>Total Price: </h3>
      <h3>₹{totalPrice}</h3>
      </div>
      <div className='d-flex justify-content-center'>
      
    <button className="custom-btn" onClick={handleCheckout}>Pay With Stripe</button>
  
      </div>
    
    </div>
  }
    
    </div>
  )
}

export default Cart
