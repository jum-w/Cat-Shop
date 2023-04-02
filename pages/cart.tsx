import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartedProduct from "../components/CartedProduct";
import products from "../components/ProductInfo"
import { ShopContext } from "@/context/ShopContext";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";

export default function Cart() {
    const { cartItems, totalItems } = useContext<any>(ShopContext);
    const [totalAmount, setTotalAmount] = useState<string>("")

    const calculateTotalAmount = () => {
        var total: number = 0;
        products.map((val) => {
            if (cartItems[val.id] > 0)
                total += cartItems[val.id] * val.price
        })
        var roundedTotal = total.toFixed(2)
        setTotalAmount(roundedTotal)
    }

    useEffect(() => {
        calculateTotalAmount()
    }, [cartItems])


    return (
        <div className="lg:min-h-screen bg-gray-50 z-2">
            <div className="flex flex-col w-3/4">
                <div className="flex justify-between items-center pt-8">
                    <Link className="text-gray-400 flex w-32 justify-center hover:-translate-x-2 duration-300" href="/shop"><FontAwesomeIcon icon={faArrowLeft} className="text-5xl" /></Link>
                    <h1 className="text-3xl font-bold">Your cart</h1>
                    <p className="lg:w-32">{ }</p>
                </div>
                <div className="flex flex-col">
                    {totalItems === 0 && <div className="flex justify-center mt-6 text-center">Your shopping cart is currently devoid of any cat-tastic products, go&nbsp;<Link href="/shop" className="border-b border-blue1 text-blue1 hover:text-blue2 hover:border-blue2">back</Link> &nbsp;to treat your furry friend(s).</div>}
                    {products.map((val) => {
                        if (cartItems[val.id] > 0)
                            return (
                                <CartedProduct {...val} amount={cartItems[val.id]} />
                            )
                    })}
                </div>
            </div>
            <div className="bg-blue2 shadow-xl lg:fixed lg:top-0 lg:right-0 lg:w-1/4 lg:min-h-screen">
                <h1>£{totalAmount}</h1>
            </div>
        </div>
    )
}
