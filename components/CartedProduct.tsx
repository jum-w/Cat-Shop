import Image from 'next/image'
import { StaticImageData } from 'next/image';
import { ShopContext } from '@/context/ShopContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ProductInfoProps {
    id: number;
    name: string;
    price: number;
    amount: number;
    image: StaticImageData
}

export default function CartedProduct({ name, price, image, id, amount }: ProductInfoProps) {
    const { addToCart, removeFromCart, deleteFromCart } = useContext<any>(ShopContext)

    var total = (price * amount).toFixed(2)

    return (
        <div className="lg:w-3/5 w-full flex justify-between px-6 mx-auto items-center my-4">
            <div>
                <Image src={image} alt="item pic" height={200} />
                <h1 className="text-center">{name}</h1>
            </div>
            <div className="flex">
                <button className="p-4 hover:text-gray-400 duration-150" onClick={() => { removeFromCart(id) }}>-</button>
                <h1 className="mx-2 lg:mx-6 my-4">{amount}</h1>
                <button className="p-4 hover:text-gray-400 duration-150" onClick={() => { addToCart(id) }}>+</button>
            </div>
            <h1>£{total}</h1>
            <button onClick={() => { deleteFromCart(id) }}><FontAwesomeIcon icon={faXmark} className="hover:text-red-600 duration-150 ml-6" /></button>
        </div>
    )
}
