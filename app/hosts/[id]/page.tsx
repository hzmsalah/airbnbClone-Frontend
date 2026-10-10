import Image from "next/image"
import ContactButton from "@/app/components/ContactButton"
import PropertyList from "@/app/components/properties/PropertyList"

export default function HostDetailPage(){
    return(
        <main className="max-w-full mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="cols-span-1 mb-4 mt-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image
                            src="/profile_pic_1.jpg"
                            alt="host profile picture"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                        <h1 className="mt-6 text-2xl">
                            Landlord Name
                        </h1>

                        <ContactButton/>
                    </div>
                </aside>
                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <PropertyList/>
                </div>
            </div>
        </main>
    )
}