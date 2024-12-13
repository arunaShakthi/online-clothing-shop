import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { cache } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props)=> {
    
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const[cartItems, setCartItems] = useState({});

    const addToCart = async (itemID,size) => {
        
        if(!size) {
            toast.error('Select Product Size');
            return;
        }
        
        let cartData = structuredClone(cartItems);

            if (cartData[itemID]) {
                if (cartData[itemID][size]) {
                    cartData[itemID][size] += 1;
                }
                else {
                    cartData[itemID][size] = 1;
                } 
            }
            else {
                cartData[itemID] = {};
                cartData[itemID][size] = 1;
            }
            setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0 ;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0 ) {
                        totalCount += cartItems[items][item]
                    }
                }catch (error) {

                }
            }
        }
        return totalCount;
    }

    useEffect(() =>{
        console.log(cartItems);
    },[cartItems])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;