import products from './ProductInfo'
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select"

export default function ItemStep() {
    const { addToSub, removeFromSub, deleteFromSub, subItems } = useContext<any>(ShopContext)

    const options = products.map((val) => ({ value: val.name, label: val.name, id: val.id }))

    return (
        <div className="mt-32 text-xl mx-4 flex justify-center items-center flex-col">
            <div className="flex flex-col text-center mb-8">
                <h1>Step 1: Choose your items</h1>
                <h2 className="text-sm text-gray-600">Choose which items to add to your subscription.</h2>
            </div>
            <div className="flex md:text-base flex-col items-center text-sm">
                {/* <select className="bg-gray-100 border h-10 border-blue2 md:w-1/4 w-full md:w-64 px-2 py-2 rounded hover:border-blue-600">
                    <option value="">Select</option>
                    {products.map((val) => {
                        return (
                            <option value={val.name} key={val.id} onClick={() => { addToSub(val.id) }}>{val.name}</option>
                        )
                    })}
                </select> 
                does not work on mobile applications, using react-select library instead.
                */}
                <Select options={options} styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? '#6C63FF' : '#6C63FF',
                        backgroundColor: "#F9FAFB",
                        ":hover": {
                            borderColor: '#6C63FF',
                            backgroundColor: '#f3f4f6'
                        }
                    }),
                }} className="w-96 rounded" onChange={(val) => { if (val) addToSub(val.id) }} />
                <div className="flex flex-col md:flex-wrap items-center mt-8">
                    {products.map((val) => {
                        if (subItems[val.id])
                            return (
                                <div className="border rounded border-blue2 h-10 flex justify-between p-2 mt-2 w-96 mb-2 shadow-lg" key={val.id}>
                                    <h1 className="w-2/3">{val.name}</h1>
                                    <div className="flex w-1/5">
                                        <button className="hover:text-gray-400 duration-150 w-8 text-center" onClick={() => { removeFromSub(val.id) }}>-</button>
                                        <h1 className="mx-4">{subItems[val.id]}</h1>
                                        <button className="hover:text-gray-400 duration-150 w-8 text-center" onClick={() => { addToSub(val.id) }}>+</button>
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
