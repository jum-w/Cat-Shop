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
    const [subItems, setSubItems] = useState(getShopItems(ProductInfo))
    const [totalSubPrice, setTotalSubPrice] = useState(0)
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [frequency, setFrequency] = useState("")

    const addToCart = (itemId: number) => {
        setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        setTotalItems(totalItems + 1)
        setTotalCartPrice(totalCartPrice + ProductInfo[itemId - 1].price)
    }

    const removeFromCart = (itemId: number) => {
        setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        setTotalItems(totalItems - 1)
        setTotalCartPrice(totalCartPrice - ProductInfo[itemId - 1].price)
    }

    const deleteFromCart = (itemId: number) => {
        setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }))
        setTotalItems(totalItems - cartItems[itemId])
        setTotalCartPrice(totalCartPrice - totalCartPrice)
    }

    const addToSub = (itemId: number) => {
        setSubItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        setTotalSubPrice(totalSubPrice + ProductInfo[itemId - 1].price)
    }

    const removeFromSub = (itemId: number) => {
        setSubItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        setTotalSubPrice(totalSubPrice - ProductInfo[itemId - 1].price)
    }

    const deleteFromSub = (itemId: number) => {
        setSubItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }))
        setTotalSubPrice(totalSubPrice - totalSubPrice)
    }

    const setFreq = (duration: string) => {
        setFrequency(duration)
    }

    const contextValue: any = { cartItems, addToCart, removeFromCart, totalItems, deleteFromCart, addToSub, removeFromSub, deleteFromSub, subItems, setFreq, frequency, totalSubPrice, totalCartPrice }

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}
