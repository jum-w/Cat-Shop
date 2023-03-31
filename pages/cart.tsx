import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartedProduct from "../components/CartedProduct";
import products from "../components/ProductInfo"
import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
import Link from "next/link";

export default function Cart() {
    const { cartItems } = useContext<any>(ShopContext)

    console.log(cartItems)

    return (
        <div className="min-h-screen bg-gray-50 shadow-xl z-2">
            <Link className="text-gray-400 pt-8 flex w-32 justify-center hover:-translate-x-2 duration-300" href="/shop"><FontAwesomeIcon icon={faArrowLeft} className="text-5xl" /></Link>
            <>
                {products.map((val) => {
                    if (cartItems[val.id] > 0)
                        return (
                            <CartedProduct />
                        )
                })}
            </>
        </div>
    )
}
