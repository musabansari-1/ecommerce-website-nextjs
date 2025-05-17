import React, {createContext, useContext, useState, useEffect} from 'react';
import {toast} from 'react-hot-toast';
import {products} from '../data/products';

const Context = createContext();

export const StateContext = ({children}) => {
    const [showLeaderBoard, setShowLeaderBoard] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [removedItems, setRemovedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    const [totalPoints, setTotalPoints] = useState(0);
    const [currentOrder, setCurrentOrder] = useState({});

    const handleUndo = () => {
        if(removedItems.length >= 1){
        const poppedItem = removedItems.pop();
        setCartItems([...cartItems, poppedItem]);
        toast.success(`Action Undone: ${poppedItem.name} re-added to the cart`);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + (poppedItem.price * poppedItem.quantity))
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + (poppedItem.quantity));
        }
      }
    
    const incQtyCart = (product) => {
        console.log('inside incQtyCart()');
        const updatedCartItems = cartItems.map((cartItem) => {
            if(cartItem.id === product.id) {
                return {
                    ...cartItem,
                    quantity: product.quantity + 1
                }
            }
            else {
                return cartItem;
            }
        })
        setCartItems(updatedCartItems);
        console.log(cartItems);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
    }

    const decQtyCart = (product) => {
        if(product.quantity <= 1){
            toast.error('The quantity cannot be less than 1')
            return;
        }
        const updatedCartItems = cartItems.map((cartItem) => {
            if(cartItem.id === product.id) {
                return {
                    ...cartItem,
                    quantity: product.quantity - 1
                }
            }
            else {
                return cartItem;
            }
        })
        setCartItems(updatedCartItems);
        console.log(cartItems);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);
    }

    const onRemoveFromCart = async (product) => {
        const updatedCartItems = cartItems.filter((cartItem) => product.id !== cartItem.id);
        setCartItems(updatedCartItems);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - product.quantity);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - (product.price * product.quantity));
        console.log('OnRemoveFromCart');
        console.log(cartItems);
        removedItems.push(product);
        console.log('removed items: ');
        console.log(removedItems);
    }

    const onAddToCart = (product, quantity) => {
        const productInCart = cartItems?.find((cartItem) => cartItem.id === product.id );
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        if(productInCart) {
            const updatedCartItems = cartItems.map((cartItem) => {
                if(cartItem.id === product.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + quantity
                    }

                }
                else {
                    return cartItem;
                }
            })
            
            setCartItems(updatedCartItems);
        }
        else {
            product.quantity = quantity;
            setCartItems([...cartItems , {...product}]);
        }
        toast.success(`${quantity} ${product.name} added to the cart.`)
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => (prevQty - 1) > 1 ? 1 : prevQty - 1);
    }

    return(
        <Context.Provider value = {{
            products,
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAddToCart,
            onRemoveFromCart,
            incQtyCart,
            decQtyCart,
            totalPoints,
            currentOrder,
            setCurrentOrder,
            removedItems,
            handleUndo,
            showLeaderBoard,
            setShowLeaderBoard
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);