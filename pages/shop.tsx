import Product from "@/components/Product";
import ProductInfo from "@/components/ProductInfo"

export default function Shop() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="">
                <button>Type</button>
                <button>Price</button>
                <button>Brand</button>
            </div>
            <div className="w-4/5 flex mx-auto flex-wrap justify-center">
                {ProductInfo.map((val, index) => {
                    return (
                        <Product {...val} key={index} />
                    )
                })}
            </div>
        </div>
    )
}
