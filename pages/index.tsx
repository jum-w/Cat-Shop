import Navbar from "@/components/Navbar";
import Image from "next/image";
import cat from "@/assets/cat.svg"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center mt-16">
        <Image src={cat} alt="picture of cat" className="mb-16 mx-4" height={192} />
        <h1 className="lg:w-1/3 text-5xl font-bold text-shadow">The <span className="text-blue1">Purrfect</span> Place for your Furry Friends.</h1>
        <h2 className="mt-4 text-gray-600 text-xl mx-4">Your Cat's Happiness is Our Priority - Shop Our Collection.</h2>
        <a href="/shop" className="mt-6 py-2 px-4 bg-blue1 hover:bg-blue2 duration-150 rounded-lg shadow-lg items-center flex text-gray-50 mb-8">Discover More <FontAwesomeIcon icon={faArrowRight} className="ml-3" /></a>
      </div>
    </>
  )
}
