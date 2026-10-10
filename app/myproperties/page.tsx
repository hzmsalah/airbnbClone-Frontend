import Image from "next/image"
import PropertyList from "../components/properties/PropertyList"

export default function MyPropertiesPage(){
    return(
        <main className="max-w-full mx-auto px-6 pb-6">
            <h1 className="text-2xl my-6">
                My Properties
            </h1>
            <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                <PropertyList/>
            </div>
        </main>
    )
}