import React from 'react'
import details from '@/assets/details.svg'
import time from '@/assets/time.svg'
import reward from '@/assets/reward.svg'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

interface ImageInfoProps {
    image: StaticImageData,
    desc: string
}

const ImageInfo = ({ image, desc }: ImageInfoProps) => {
    return (
        <div className="flex flex-col justify-center items-center mb-12">
            <Image src={image} alt={desc} height={150} className="text-center" />
            <h1 className="flex justify-center text-center text-base mt-4 w-52">{desc}</h1>
        </div>
    )
}

export default function MembershipInfo() {
    return (
        <div className=" text-5xl mx-4" id="membership">
            <div className="text-center font-bold mb-12">
                <h1>How it works</h1>
            </div>
            <div className="flex lg:flex-row flex-col justify-between w-3/4 mx-auto">
                <ImageInfo image={details} desc={"Enter your details"} />
                <ImageInfo image={time} desc={"Secure your savings by committing to a few recurring orders."} />
                <ImageInfo image={reward} desc={"Reap the rewards with every reoccuring delivery!"} />
            </div>
        </div>
    )
}
