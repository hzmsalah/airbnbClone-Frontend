import Image from "next/image"

export default function MyReservationsPage(){
    return(
        <main className="max-w-full mx-auto px-6 pb-6">
            <h1 className="text-2xl my-6">
                My Reservations
            </h1>
            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                            fill
                            src="/beach_1.jpg"
                            className="hover:scale-110 object-cover transition h-full w-full"
                            alt="Beach House"
                            />
                        </div>
                    </div>
                        <div className="col-span-3 space-y-2">
                            <h2 className="mb-4 text-xl">
                                Property Name
                            </h2>
                            <p>
                                <strong>Check In Date:</strong> 14/10/2026
                            </p>
                            <p>
                                <strong>Check Out Date:</strong> 18/10/2026
                            </p>
                            <p>
                                <strong>Number Of Nights:</strong> 4 Nights
                            </p>
                            <p>
                                <strong>Total Price:</strong> $200
                            </p>
                            
                            <div className="mt-4 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark">
                                Go to property
                            </div>
                        </div>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                            fill
                            src="/beach_1.jpg"
                            className="hover:scale-110 object-cover transition h-full w-full"
                            alt="Beach House"
                            />
                        </div>
                    </div>
                        <div className="col-span-3 space-y-2">
                            <h2 className="mb-4 text-xl">
                                Property Name
                            </h2>
                            <p>
                                <strong>Check In Date:</strong> 14/10/2026
                            </p>
                            <p>
                                <strong>Check Out Date:</strong> 18/10/2026
                            </p>
                            <p>
                                <strong>Number Of Nights:</strong> 4 Nights
                            </p>
                            <p>
                                <strong>Total Price:</strong> $200
                            </p>

                            <div className="mt-4 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark">
                                Go to property
                            </div>
                        </div>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                            fill
                            src="/beach_1.jpg"
                            className="hover:scale-110 object-cover transition h-full w-full"
                            alt="Beach House"
                            />
                        </div>
                    </div>
                        <div className="col-span-3 space-y-2">
                            <h2 className="mb-4 text-xl">
                                Property Name
                            </h2>
                            <p>
                                <strong>Check In Date:</strong> 14/10/2026
                            </p>
                            <p>
                                <strong>Check Out Date:</strong> 18/10/2026
                            </p>
                            <p>
                                <strong>Number Of Nights:</strong> 4 Nights
                            </p>
                            <p>
                                <strong>Total Price:</strong> $200
                            </p>

                            <div className="mt-4 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark">
                                Go to property
                            </div>
                        </div>
                </div>
            </div>
        </main>
    )
}