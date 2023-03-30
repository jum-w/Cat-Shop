import Image, { StaticImageData } from 'next/image'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShopContext } from '@/context/ShopContext';
import { useContext } from 'react';

interface ProductInfoProps {
    id: number;
    name: string;
    description: string;
    price: number;
    type: string;
    image: StaticImageData
}

export default function Product({ id, name, description, price, type, image }: ProductInfoProps) {
    const { addToCart, cartItems } = useContext<any>(ShopContext)

    const totalItems: number = cartItems[id]

    return (
        <div className="shadow-lg flex flex-col md:w-1/4 border border-gray-300 rounded p-2 m-4">
            <div className="flex justify-center mb-6">
                <Image src={image} alt="Image of item displayed" height={200} />
            </div>
            <div className="flex flex-col items-center text-center grow">
                <h1 className='font-bold text-lg'>{name}</h1>
                <h2 className='text-gray-600 mb-4 text-sm w-4/5 grow'>{description}</h2>
                <h1 className='font-bold mb-4 text-blue1 text-lg'>£{price}</h1>
                <button className='bg-blue1 hover:bg-blue2 w-full py-1 rounded text-gray-50 flex justify-center items-center' onClick={() => { addToCart(id) }}><FontAwesomeIcon icon={faShoppingCart} className="mr-2" />Add to Cart&nbsp;{totalItems > 0 && <div>({totalItems})</div>}</button>
            </div>
        </div>
    )
}
