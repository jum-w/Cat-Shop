import { useContext, useState, useEffect } from "react"
import { ShopContext } from "@/context/ShopContext"

interface ButtonProps {
    time: string
}

export default function DurationButton({ time }: ButtonProps) {
    const { setFreq, frequency } = useContext<any>(ShopContext)
    const [highlight, setHighlight] = useState(false);

    const handleDuration = () => {
        setHighlight(true);
        setFreq(time);
    }

    useEffect(() => {
        if (frequency != time) setHighlight(false)
    }, [frequency])

    return (
        <div className={`border border-blue1 w-max px-2 py-1 rounded shadow-xl hover:bg-blue2 hover:text-gray-50 duration-150 mr-4 mb-4 ${highlight ? "bg-blue2 text-white" : ""}`} onClick={handleDuration}>
            <button>{time}</button>
        </div>
    )
}
