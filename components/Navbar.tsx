import logo from './purrfect_picks.svg'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="flex justify-between mx-auto border-gray-300 text-lg">
            <div className="p-4 block">
                <Image src={logo} alt="Logo picute" />
            </div>
            <div className="flex justify-center items-center">
                <a href="/" className="px-4 hover:text-blue1 duration-150">Membership</a>
                <a href="/shop" className="px-4 hover:text-blue1 duration-150">About</a>
                <a href="/about" className="px-4 hover:text-blue1 duration-150"></a>
            </div>
        </div>
    )
}