import DurationButton from './DurationButton'

export default function DurationStep() {
    return (
        <div className="my-16 text-xl mx-4 flex justify-center items-center flex-col">
            <div className="flex flex-col text-center mb-8">
                <h1>Step 2: Choose the duration</h1>
                <h2 className="text-sm text-gray-600">Choose how often you want your items to be delivered.</h2>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-wrap justify-center sm:justify-start text-base">
                    <DurationButton time='2 weeks' />
                    <DurationButton time='1 month' />
                    <DurationButton time='2 months' />
                    <DurationButton time='3 months' />
                    <DurationButton time='6 months' />
                </div>
            </div>
        </div>
    )
}
