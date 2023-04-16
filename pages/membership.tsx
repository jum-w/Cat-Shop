import Navbar from "@/components/Navbar";
import image from "@/assets/journey.svg"
import Image from "next/image";
import products from "@/components/ProductInfo"
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";

export default function Membership() {
    const { addToSub, removeFromSub, deleteFromSub, subItems } = useContext<any>(ShopContext)

    return (
        <>
            <Navbar />
            <div className="h-screen">
                <div className="flex flex-col items-center text-center mx-12 mt-16">
                    <Image src={image} alt="picture of two people holding hands looking at world map" className="mb-16 mx-4" width={360} />
                    <h1 className="text-4xl sm:text-5xl font-bold text-shadow">Start your journey with us</h1>
                    <h2 className="text-center text-lg sm:text-xl mt-4 lg:w-3/4">Simplify your life and save money at the same time! Choose what you want delivered, lock in your subscription, and get a discount on your next order.</h2>
                </div>
                <div className="my-8 text-xl mx-4">
                    <div className="">
                        <h1>Step 1: Choose your items</h1>
                        <hr className="my-2" />
                    </div>
                    <div className="flex justify-between">
                        <select className="bg-gray-100 border border-blue2 w-64 px-2 text-base rounded">
                            <option value="">Select</option>
                            {products.map((val) => {
                                return (
                                    <option value={val.name} >{val.name}</option>
                                )
                            })}
                        </select>
                        <div className="">
                            hello
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
