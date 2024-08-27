import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(); //creating context

export const useCart=()=>useContext(CartContext); //useCart will access items and functions of CartContext

export const CartProvider =({children})=>{
    const [cart, setCart] = useState([]);

    const addToCart =(item)=>{
        setCart((prevCart)=>{
            //it will match the item title with prevCart items titles 
            const existingItemIndex=prevCart.findIndex(cartItem=> cartItem.title=== item.title); 
            //title not matched: -1 else:
            if(existingItemIndex>-1){//in case if title is matched
                const updatedCart =[...prevCart];// spread operator will copy the previous cart
                updatedCart[existingItemIndex].quantity +=1;
                return updatedCart;
            }
            else{
                return[...prevCart,{...item,quantity:1}]
            }
        })
    }

    const removeFromCart=(title)=>{
        setCart((prevCart)=>prevCart.filter(item=>item.title!==title)) 
    } 

    const updateQuantity =(title,quantity)=>{
        setCart((prevCart)=>{
            return prevCart.map(item=> item.title===title?{...item,quantity}:item)//quamtity is overriden
        })
    }
    // only children will have access .... Provider is wraped around the children
    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,updateQuantity}}>
            {children} 
        </CartContext.Provider>
    )
}