import React from 'react'
import DurationButton from './DurationButton'

export default function DurationStep() {
    return (
        <div className="my-32 text-xl mx-4">
            <div className="">
                <h1>Step 2: Choose the duration</h1>
                <h2 className="text-sm text-gray-600">Choose the frequency that you get the items delivered.</h2>
                <hr className="my-2" />
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start text-base">
                <DurationButton time='2 weeks' />
                <DurationButton time='1 month' />
                <DurationButton time='2 months' />
                <DurationButton time='3 months' />
                <DurationButton time='6 months' />
            </div>
        </div>
    )
}
