import Navbar from "@/components/Navbar";
import image from "@/assets/journey.svg"
import Image from "next/image";
import ItemStep from "@/components/ItemStep";
import DurationStep from "@/components/DurationStep";
import MembershipInfo from "@/components/MembershipInfo";
import { Link } from "react-scroll"
import SummaryStep from "@/components/SummaryStep";


export default function Membership() {
    return (
        <>
            <Navbar />
            <>
                <div className="flex flex-col items-center text-center mx-12 min-h-screen mt-16">
                    <Image src={image} alt="picture of two people holding hands looking at world map" className="mb-16 mx-4" width={360} />
                    <h1 className="text-4xl md:text-5xl font-bold text-shadow">Start your journey with us</h1>
                    <h2 className="text-center text-lg md:text-xl mt-4 md:w-3/4 text-gray-600">Simplify your life and save money at the same time! Choose what you want delivered, lock in your subscription, and get a discount on your next order.</h2>
                    <Link to="membership" duration={1000} smooth={true} className="mt-12 py-2 px-4 bg-blue1 hover:bg-blue2 duration-150 rounded-lg shadow-lg items-center flex text-gray-50 mb-8">
                        Get Started
                    </Link>
                </div>
                <>
                    <MembershipInfo />
                    <ItemStep />
                    <DurationStep />
                    <SummaryStep />
                </>
            </>
        </>
    )
}
