import { ShopContext } from '@/context/ShopContext'
import React, { useContext } from 'react'
import products from './ProductInfo'

type Props = {}

export default function SummaryStep({ }: Props) {
    const { subItems, frequency } = useContext<any>(ShopContext)

    return (
        <div className="my-32 text-xl mx-4">
            <div className="">
                <h1>Step 2: Choose the duration</h1>
                <h2 className="text-sm text-gray-600">Choose the frequency that you get the items delivered.</h2>
                <hr className="my-2" />
            </div>
            <div className="">
                {products.map((val) => {
                    if (subItems[val.id] > 0)
                        return (
                            <div className="" key={val.id}>
                                {val.price * subItems[val.id]}
                            </div>
                        )
                })}
            </div>
            <div className="">
                {frequency}
            </div>
        </div>
    )
}