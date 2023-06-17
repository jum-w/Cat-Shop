import { ShopContext } from '@/context/ShopContext'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function SummaryStep() {
    const { subItems, frequency, totalSubPrice } = useContext<any>(ShopContext)

    return (
        <div className="mb-32 mx-4 text-xl flex justify-center items-center flex-col">
            <div className="flex flex-col text-center mb-8">
                <h1>Step 3: Review your subscription</h1>
                <h2 className="text-sm text-gray-600">Review and create your subscription to your liking.</h2>
            </div>
            {totalSubPrice > 0 && frequency && subItems ?
                (
                    <div className="flex flex-col text-base">
                        <div className="text-center">
                            <div className="my-3">
                                You have chosen to get your items delivered every <span className="border-b border-blue2">{frequency}.</span>
                            </div>
                            <div className="">
                                The price of all your items is <span className="border-b border-blue2">£{totalSubPrice.toFixed(2)}.</span>
                            </div>
                        </div>
                        <hr className='my-8' />
                        <div className="text-center">
                            <div className="my-3">
                                After every <span className="border-b border-blue2">{frequency}</span> you will receive <span className="border-b border-blue2">5%</span> | <span className="border-b border-blue2">10%</span> | <span className="border-b border-blue2">15%</span>.
                            </div>
                            <div className="">
                                The price of your next <span className="border-b border-blue2">month</span> | <span className="border-b border-blue2">3 months</span> | <span className="border-b border-blue2">6 months</span> will be <span className="border-b border-blue2">£{(totalSubPrice - (totalSubPrice / 10)).toFixed(2)}</span> | <span className="border-b border-blue2">£{(totalSubPrice - ((totalSubPrice / 100) * 15)).toFixed(2)}</span> | <span className="border-b border-blue2">£{(totalSubPrice - (totalSubPrice / 5)).toFixed(2)}</span>.
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
            {
                totalSubPrice > 0 && frequency && subItems &&
                <div className="flex text-gray-50 mt-8 justify-center xl:justify-start">
                    <button className="bg-black px-6 py-3 rounded-2xl hover:bg-gray-700 duration-150 text-base"><FontAwesomeIcon icon={faShoppingCart} className="mr-3" />Checkout</button>
                </div>
            }
        </div >
    )
}