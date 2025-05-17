import React, {useState} from 'react'
import {useRouter} from 'next/router';
import {products} from '../../data/products';
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import {useStateContext} from '../../context/StateContext.js';
import {toast} from 'react-hot-toast';

const ProductDetails = () => {
  const {onAddToCart} = useStateContext();
  const router = useRouter();
  const {id} = router.query;
  console.log(id);
  const product = products.find(item => item.id == Number(id));
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
}

const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 > 1) {
        return (prevQty - 1)
      }
      else {
        toast.error('The quantity cannot be less than 1');
        return 1;
      }
    });
}

  if (!product) {
  return <div>Product not found</div>;
}


  return (
    <div className='d-flex justify-content-evenly productDetail'>
    <div className='product-image'>
      <img src = {product.image} />
    </div>
    <div >
     <h3 className='text-uppercase'>{product.name}</h3>
     <div>
        <p><AiFillStar color='orange'/>
        <AiFillStar color='orange'/>
        <AiFillStar color='orange'/>
        <AiFillStar color='orange'/>
        <AiOutlineStar color='orange'/></p>
     </div>
     <p>{product.description}</p>
     <p className='price'>₹{product.price}</p>
     <div className='col-lg-7 qty'>
            <button onClick={decQty}><AiOutlineMinus color='orangered' size={20} /></button>
            <span>{qty}</span>
            <button onClick={incQty}><AiOutlinePlus color='orangered' size={20} /></button>
            </div >
     <button className='custom-btn' onClick={() => onAddToCart(product,qty)}>Add to Cart</button>
    </div>
    </div>
  )
}

export default ProductDetails
