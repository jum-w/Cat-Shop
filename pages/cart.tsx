import { faArrowLeft, faShop, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartedProduct from "../components/CartedProduct";
import products from "../components/ProductInfo"
import { ShopContext } from "@/context/ShopContext";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";

export const SummaryInfo = ({ title, cost }: { title: string, cost: string }) => {
    return (
        <div className="flex flex-row pt-4 justify-between">
            <h1 className="text-gray-300">{title}</h1>
            <h1 className="text-gray-50">£{cost}</h1>
        </div>
    )
}

export default function Cart() {
    const { cartItems, totalItems } = useContext<any>(ShopContext);
    const [totalAmount, setTotalAmount] = useState<string>("")
    const [totalAndShipping, setTotalAndShipping] = useState<string>("");

    const calculateTotalAmount = () => {
        var total: number = 0;
        products.map((val) => {
            if (cartItems[val.id] > 0)
                total += cartItems[val.id] * val.price
        })
        var roundedTotal = total.toFixed(2)
        setTotalAmount(roundedTotal)
        setTotalAndShipping((total + 4.99).toFixed(2))
    }

    useEffect(() => {
        calculateTotalAmount()
    }, [cartItems])

    return (
        <div className="h-screen bg-gray-50 z-2 flex flex-col">
            <div className="flex flex-col lg:w-3/4">
                <div className="flex justify-between items-center pt-8">
                    <Link className="text-gray-400 flex w-32 justify-center hover:-translate-x-2 duration-300" href="/shop"><FontAwesomeIcon icon={faArrowLeft} className="text-5xl" /></Link>
                    <h1 className="text-3xl text-center">Shopping cart</h1>
                    <p className="w-32">{ }</p>
                </div>
                <div className="flex flex-col">
                    {totalItems === 0 && <p className="text-center h-96 px-2 pt-6">Your shopping cart is currently devoid of any cat-tastic products, go&nbsp;<Link href="/shop" className="text-blue2 border-b border-blue2">back</Link>&nbsp;to treat your furry friend(s).</p>}
                    {products.map((val) => {
                        if (cartItems[val.id] > 0)
                            return (
                                <CartedProduct {...val} amount={cartItems[val.id]} />
                            )
                    })}
                </div>
            </div>
            <div className="bg-blue2 lg:shadow-xl grow max-h-128 lg:fixed lg:top-0 lg:right-0 lg:w-1/4 lg:min-h-screen text-2xl text-gray-50 mt-8 lg:mt-0">
                <div className="flex flex-col h-1/2 p-4 mt-8 text-base">
                    <h1>Summary</h1>
                    <hr className="bg-gray-800 px-2 rounded mt-4" />
                    {totalItems === 0 && <p className="pt-4 text-center">Nothing to purchase!</p>}
                    {totalItems > 0 &&
                        <div>
                            <SummaryInfo title={"Order Summary"} cost={totalAmount} />
                            <SummaryInfo title={"Shipping"} cost={"4.99"} />
                            <SummaryInfo title={"Total"} cost={totalAndShipping} />
                            <div className="flex justify-center mt-8">
                                <button className="bg-black px-6 py-3 rounded-2xl hover:bg-gray-700 duration-150"><FontAwesomeIcon icon={faShoppingCart} className="mr-3" />Checkout</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
