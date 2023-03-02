import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import ProductInfo from "@/components/ProductInfo"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Shop() {
    const filter: string[] = ["Food", "Care", "Toy", "Treat", "Furniture"]

    const [dropDownVisible, setDropDownVisible] = useState(false);
    const [filterType, setFilterType] = useState<any[]>([])

    const handleCheckboxChange = (e: any) => {
        const value = e.target.value;
        setFilterType((prev) => {
            if (prev.includes(value)) {
                return prev.filter((type) => type !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="flex w-2/5 justify-center mx-auto mt-8">
                <div className="mx-5">
                    <button className="w-32 border border-blue1 mb-1 rounded hover:bg-gray-100 duration-150" onClick={() => { setDropDownVisible(!dropDownVisible) }}>Filter <FontAwesomeIcon icon={faCaretDown} className={`ml-2 duration-150 ${dropDownVisible ? "rotate-90" : ""}`} /></button>
                    {dropDownVisible && (
                        <div className="fixed shadow bg-gray-50 rounded p-3 w-32">
                            <ul>
                                {filter.map((type, index) => (
                                    <li key={index}>
                                        <input
                                            type="checkbox"
                                            value={type}
                                            onChange={handleCheckboxChange}
                                        />
                                        {" "}
                                        {type}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-4/5 flex mx-auto flex-wrap justify-center">
                {ProductInfo.filter(val => filterType.length === 0 ? true : filterType.includes(val.type)).map((val, index) => {
                    return (
                        <Product {...val} key={index} />
                    )
                })}
            </div>
        </div>
    )
}
