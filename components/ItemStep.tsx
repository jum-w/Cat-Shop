import products from './ProductInfo'
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ItemStep() {
    const { addToSub, removeFromSub, deleteFromSub, subItems } = useContext<any>(ShopContext)
    return (
        <div className="my-32 text-xl mx-4">
            <div className="">
                <h1>Step 1: Choose your items</h1>
                <h2 className="text-sm text-gray-600">Choose which items to add to your subscription.</h2>
                <hr className="my-2" />
            </div>
            <div className="flex justify-between md:text-base md:flex-row flex-col items-center text-sm">
                <select className="bg-gray-100 border h-10 border-blue2 md:w-1/4 w-full md:w-64 px-2 py-2 rounded hover:border-blue-600">
                    <option value="">Select</option>
                    {products.map((val) => {
                        return (
                            <option value={val.name} key={val.id} onClick={() => { addToSub(val.id) }}>{val.name}</option>
                        )
                    })}
                </select>
                <div className="w-full lg:w-3/4 flex flex-col lg:flex-row md:flex-wrap md:ml-16 items-center md:mt-0 mt-8">
                    {products.map((val) => {
                        if (subItems[val.id] > 0)
                            return (
                                <div className="bg-gray-100 border rounded border-blue2 h-10 flex justify-between p-2 mt-2 w-full md:w-96 mb-2 sm:mx-2" key={val.id}>
                                    <h1 className="w-2/3">{val.name}</h1>
                                    <div className="flex w-1/5">
                                        <button className="hover:text-gray-400 duration-150" onClick={() => { removeFromSub(val.id) }}>-</button>
                                        <h1 className="mx-4">{subItems[val.id]}</h1>
                                        <button className="hover:text-gray-400 duration-150" onClick={() => { addToSub(val.id) }}>+</button>
                                    </div>
                                    <button className="w-[5%]" onClick={() => { deleteFromSub(val.id) }}><FontAwesomeIcon icon={faXmark} className="hover:text-red-600 duration-150" /></button>
                                </div>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}
