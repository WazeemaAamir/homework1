import Form from "../Components/Forms"
export default function Forms(){
    return(
        <div className="mt-10">
        <h1 className="text-5xl font-semibold text-center uppercase">
            enter your details
        </h1>

        <div>
            <form className="mt-10 flex gap-5 justify-center items-center flex-col border">
                <input type="email" className="p-2 rounded-2xl w-2/5 border border-red-800"
                placeholder="Enter your Email" />

                <input type="password" className="p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Password" />

                <input type="Card Number" className="p-2 rounded-2xl w-2/5 border border-red-800"
                placeholder="Card Number" />

                <input type="Address" className="p-2 rounded-2xl w-2/5 border border-red-800"
                placeholder="Address" />
                
                <button className=" py-3 px-7 rounded-lg 
                bg-blue-500 text-white">Place your order</button>
            </form>
        </div>
    </div>
    )
}