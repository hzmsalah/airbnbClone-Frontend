'use client'
import CustomButton from "../forms/CustomButton"

export default function ConversationDetail(){
    return(
        <>
            <div className="
            max-h-full
            overflow-auto
            flex
            flex-col
            space-y-4">
                <div className="
                w-[60%]
                py-4
                px-6
                rounded-xl
                bg-gray-200">
                    <p className="
                    font-bold
                    text-gray-500">
                        John Doe
                    </p>

                    <p>
                        THE MESSAGE IS SENT
                    </p>
                </div>

                <div className="
                w-[60%] ml-[40%]
                py-4
                px-6
                rounded-xl
                bg-blue-200">
                    <p className="
                    font-bold
                    text-gray-500">
                        Host
                    </p>

                    <p>
                        THE MESSAGE IS SENT
                    </p>
                </div>
            </div>

            {/* Input Field */}
            <div className="
            py-4
            px-6
            mt-4
            flex
            border
            border-gray-300
            space-x-4
            rounded-xl">
                <input type="text" placeholder="Your Message" className="
                w-full
                p-4 
                bg-gray-200
                rounded-xl"/>

                <CustomButton
                onClick={()=> {console.log("Sent")}}
                label="Send"
                className="w-25"/>

            </div>
        </>
        
    )
}