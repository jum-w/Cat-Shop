import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/context/ShopContext";

type handleCart = (handle: boolean) => void;

export default function Cart({ handle }: { handle: handleCart }) {
    const { cartItems } = useContext<any>(ShopContext)
    const [cartedItems, setCartedItems] = useState({})

    useEffect(() => {
        displayCartItems()
    }, [cartedItems])


    return (
        <div className="min-h-full md:w-96 w-full fixed right-0 top-0 bg-gray-50 shadow-xl z-2">
            <div className="text-gray-400 p-2 text-right text-4xl"><button onClick={() => handle(false)}><FontAwesomeIcon icon={faXmark} /></button></div>
            <div className="">
                Cart Items
            </div>
        </div>
    )
}