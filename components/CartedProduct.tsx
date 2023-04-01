import Image from 'next/image'
import { StaticImageData } from 'next/image';
import { ShopContext } from '@/context/ShopContext';
import { useContext } from 'react';

interface ProductInfoProps {
    id: number;
    name: string;
    price: number;
    amount: number;
    image: StaticImageData
}

export default function CartedProduct({ name, price, image, id, amount }: ProductInfoProps) {
    const { addToCart, removeFromCart } = useContext<any>(ShopContext)

    return (
        <div className="w-2/3 flex justify-between mx-auto items-center my-4">
            <div className="">
                <Image src={image} alt="item pic" height={200} />
                <h1 className="text-center">{name}</h1>
            </div>
            <div className="flex">
                <button className="p-4 hover:text-gray-400 duration-150" onClick={() => { removeFromCart(id) }}>-</button>
                <h1 className="mx-6 my-4">{amount}</h1>
                <button className="p-4 hover:text-gray-400 duration-150" onClick={() => { addToCart(id) }}>+</button>
            </div>
            <h1>£{price * amount}</h1>
        </div>
    )
}
