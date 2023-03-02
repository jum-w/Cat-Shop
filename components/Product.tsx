import logo from './purrfect_picks.svg'
import Image from 'next/image'

interface ProductInfoProps {
    id: number;
    name: string;
    description: string;
    price: number;
}

export default function Product({ name, description, price }: ProductInfoProps) {
    return (
        <div className="shadow-lg flex flex-col sm:w-1/4 border border-gray-300 rounded p-2 m-4">
            <div className="flex justify-center mb-6">
                <Image src={logo} alt="Logo picute" height={150} />
            </div>
            <div className="flex flex-col items-center text-center grow">
                <h1 className='font-bold text-lg'>{name}</h1>
                <h2 className='text-gray-600 mb-4 text-sm w-4/5 grow'>{description}</h2>
                <h1 className='font-bold mb-4 text-blue1'>£{price}</h1>
                <button className='bg-blue1 hover:bg-blue2 w-full py-1 rounded text-gray-50 '>Add to Cart</button>
            </div>
        </div>
    )
}
