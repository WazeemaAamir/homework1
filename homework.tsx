import Link from "next/link";

export default function Homework() {
    return (
        <div>
            <h1 className="text-5xl justify-center text-center underline uppercase"> 
                Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs 
            </h1>

            {/* Inserting the main car image */}
            <div className="flex justify-center mt-4">
                <img 
                    src="/path-to-your-image/car-image.jpg" 
                    alt="Toyota Corolla 2024" 
                    className="w-96 h-auto"
                />
            </div>

            {/* Description section with some text */}
            <p className="mt-4 px-4 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fugiat 
                dicta natus, laudantium obcaecati magni nisi iure quos possimus non 
                illo esse accusantium ipsam placeat. Necessitatibus tempora unde tenetur?
                Repellendus.
            </p>

            {/* Payment buttons */}
            <div className="flex justify-center space-x-4 mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded">PKR 500000</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Make Payment</button>
            </div>

            {/* Existing section */}
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

            {/* Featured New Car Section */}
            <div className="mt-10">
                <p>Featured New Car</p>
                <p>Popular</p>
                <p>Upcoming</p>
                <p>New Launched</p>

                <img 
                    src="https://example.com/car1-image.jpg" 
                    alt="Car 1"
                    className="w-full h-auto rounded-lg"
                />
                <img 
                    src="https://example.com/car2-image.jpg" 
                    alt="Car 2"
                    className="w-full h-auto rounded-lg"
                />
                <img 
                    src="https://example.com/car3-image.jpg" 
                    alt="Car 3"
                    className="w-full h-auto rounded-lg"
                />
                <img 
                    src="https://example.com/car4-image.jpg" 
                    alt="Car 4"
                    className="w-full h-auto rounded-lg"
                />
            </div>

            {/* Sell Your Car Section */}
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

            {/* Navbar image insertion */}
            <div className="flex justify-center mt-10">
                <img 
                    src="https://github.com/Ali-Ahmed999/Tuesday7PM-10PM/blob/main/class06/homework/navbar.PNG?raw=true" 
                    alt="Navbar Image"
                    className="w-full h-auto"
                />
            </div>

            {/* Forms section */}
            <div className="mt-10">
                <h1 className="text-5xl font-semibold text-center uppercase">
                    Enter your details
                </h1>

                <div>
                    <form className="mt-10 flex gap-5 justify-center items-center flex-col border">
                        <input 
                            type="email" 
                            className="p-2 rounded-2xl w-2/5 border border-red-800"
                            placeholder="Enter your Email" 
                        />
                        <input 
                            type="password" 
                            className="p-2 rounded-2xl w-2/5 border border-red-800" 
                            placeholder="Enter your Password" 
                        />
                        <input 
                            type="text" 
                            className="p-2 rounded-2xl w-2/5 border border-red-800"
                            placeholder="Card Number" 
                        />
                        <input 
                            type="text" 
                            className="p-2 rounded-2xl w-2/5 border border-red-800"
                            placeholder="Address" 
                        />
                        
                        <button className=" py-3 px-7 rounded-lg bg-blue-500 text-white">
                            Place your order
                        </button>
                    </form>
                    
                              {/* Thank You image section */}
                    <div className="flex justify-center mt-10">
                        <h1>Thank you for shopping!!!</h1>
                        <p>Your order wi be deivered in 3 Buisness days</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
