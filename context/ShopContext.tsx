import { createContext, useState } from "react";
import ProductInfo from '../components/ProductInfo'

export const ShopContext = createContext(null);

const getShopItems = (ProductInfo: any) => {
    let shopObject: any = {}
    for (var i = 1; i < ProductInfo.length + 1; i++) {
        shopObject[i] = 0;
    }
    return shopObject
}

export const ShopContextProvider = (props: any) => {
    const [cartItems, setCartItems] = useState(getShopItems(ProductInfo))
    const [totalItems, setTotalItems] = useState(0)

    const addToCart = (itemId: number) => {
        setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        setTotalItems(totalItems + 1)
    }

    const removeFromCart = (itemId: number) => {
        setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        setTotalItems(totalItems - 1)
    }

    const deleteFromCart = (itemId: number) => {
        setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }))
        setTotalItems(totalItems - cartItems[itemId])
    }

    const contextValue: any = { cartItems, addToCart, removeFromCart, totalItems, deleteFromCart }

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}
