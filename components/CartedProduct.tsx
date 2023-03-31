import premium from '../assets/kitten-chicken.png'
import Image from 'next/image'
import { StaticImageData } from 'next/image';
import products from './ProductInfo';

interface ProductInfoProps {
    id: number;
    name: string;
    description: string;
    price: number;
    type: string;
    image: StaticImageData
}

export default function CartedProduct() {
    return (
        <div className="w-2/3 flex justify-between mx-auto items-center">
            <div className="">
                <Image src={premium} alt="item pic" height={200} />
                <h1 className="text-center">Title of product</h1>
            </div>
            <div className="flex">
                <button className="p-4 hover:text-gray-400 duration-150">-</button>
                <h1 className="mx-6 my-4">1</h1>
                <button className="p-4 hover:text-gray-400 duration-150">+</button>
            </div>
            <h1>Total</h1>
        </div>
    )
}
