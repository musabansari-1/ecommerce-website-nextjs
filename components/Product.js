import React, {useState} from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai';
import {GrView} from 'react-icons/gr';
import {BsBagCheck} from 'react-icons/bs';
import ReactTooltip from 'react-tooltip';
import Link  from 'next/link';
import { useStateContext } from '@/context/StateContext';


const Product = ({product}) => {
  const {onAddToCart} = useStateContext();

  return (
    <div className='col-lg-3 col-md-6'>
    <div className="card product " >
    <img src={product.image} className="card-img-top p-25" alt="..."/>
           <div className='d-flex justify-content-between product-button-container'>
            <Link href={`/product/${product.id}`} passHref>
                <button title='View Product' ><GrView /></button>
            </Link>
            <button onClick={() => onAddToCart(product, 1)} title="Add to Cart"><AiOutlineShoppingCart/></button>
            <button title="Add to Wishlist"><BsBagCheck /></button>
            </div>

            
      
  {/* <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <h5 className="card-title">{product.price}</h5>
    <p className="card-text">{product.description}</p>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div> */}
</div>
<div className='mx-3 product-content'>
              <h4>{product.name}</h4>
              <h5>₹{product.price}</h5>
            </div>
            </div>
  )
}

export default Product
