import Link from "next/link";
export default function Hero(){
    return (
        <div className="mt-10">
        <label className="text-center font-semibold">
            Sell Your Car on Pak Wheels and get the best Price
        </label>
        <p>Post Your Ad on Pak Wheels</p>

        <ul>
            <li>✔ Post your Ad for Free in 3 Steps</li>
            <li>✔ Get Genuine offers from Verified Buyers</li>
            <li>✔ Sell your Car at the Best Price</li>
        </ul>
        <button className="py-3 px-7 rounded-lg bg-red-400 text-white">
            Post your Ad
        </button>

        <p>Try PakWheels Sell it for me</p>
        <ul>
            <li>✔ Dedicated Sales Expert to Sell your Car</li>
            <li>✔ We Bargain for you and share the Best Offer</li>
            <li>✔ We ensure a Safe & Secure Transaction</li>
        </ul>      
        <button className="py-3 px-7 rounded-lg bg-blue-400 text-white">
            Register your Car
        </button>
    </div>

    )
}