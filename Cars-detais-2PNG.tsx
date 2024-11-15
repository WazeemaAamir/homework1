import Link from "next/link";
export default function(){
    return (
        <div>
            <h1 className="text-5xl justify-center text-center underline uppercase"> 
                Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs 
            </h1>

            {/* Inserting an image */}
            <div className="flex justify-center mt-4">
                <img 
                    src="/path-to-your-image/car-image.jpg" 
                    alt="Toyota Corolla 2024" 
                    className="w-96 h-auto"
                />
            </div>

            <div className="flex flex-col items-center space-y-4 mt-4">
                <button className="bg-blue-400 text-white px-4 py-2 rounded">Book a test drive</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Request Bank Finance</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Visit Place</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Car Inspection</button>
            </div>

            <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold">Vehicle Description</h2>
                <p>
                    Number of Doors: 4<br />
                    Engine: 1800cc<br />
                    Condition: 8.5/10<br />
                    Driven: 9500km<br />
                    Suspension Type: Soft Suspension<br />
                    Avg: 13km per liter<br />
                    Transmission: Automatic<br />
                    Fuel Type: High Octane
                </p>

                {/* New buttons for price and payment */}
                <div className="flex justify-center space-x-4 mt-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">PKR 500000</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">Make Payment</button>
                </div>    
            </div>
            </div>
    )
}