import Link from "next/link";
export default function(){
    return (
        <div>
              <h1 className="text-5xl justify-center text-center underline uppercase"> 
                Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs 
            </h1>

            <div className="flex justify-center mt-4">
                <img 
                    src="/path-to-your-image/car-image.jpg" 
                    alt="Toyota Corolla 2024" 
                    className="w-96 h-auto"
                />
            </div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fugiat 
                dicta natus, laudantium obcaecati magni nisi iure quos possimus non 
                illo esse accusantium ipsam placeat. Necessitatibus tempora unde tenetur?
                Repellendus.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">PKR 500000</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">Make Payment</button>
                </div>
        </div>
    )}
