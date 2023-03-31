import logo from '../assets/purrfect_picks.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex justify-between mx-auto border-gray-300 text-lg">
            <div className="p-4">
                <Link href="/"><Image src={logo} alt="Logo picture" /></Link>
            </div>
            <div className="flex justify-center items-center">
                <Link href="/" className="px-4 hover:text-blue1 duration-150">Membership</Link>
                <Link href="/shop" className="px-4 hover:text-blue1 duration-150">About</Link>
                <Link href="/about" className="px-4 hover:text-blue1 duration-150"></Link>
            </div>
        </div>
    )
}