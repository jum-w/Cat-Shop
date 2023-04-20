import { ShopContext } from '@/context/ShopContext'
import React, { useContext } from 'react'
import products from './ProductInfo'

export default function SummaryStep() {
    const { subItems, frequency, totalSubPrice } = useContext<any>(ShopContext)

    return (
        <div className="my-32 text-xl mx-4">
            <div className="">
                <h1>Step 3: Review your subscription</h1>
                <h2 className="text-sm text-gray-600">Review and setup your subscription to your liking.</h2>
                <hr className="my-2" />
            </div>
            <div className="">
                {frequency}
            </div>
            <div className="">
                {totalSubPrice.toFixed(2)}
            </div>
        </div>
    )
}