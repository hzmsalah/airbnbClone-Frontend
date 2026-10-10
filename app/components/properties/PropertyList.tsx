import PropertyListItem from "./PropertyListItem"

export default function PropertyList(){
    return(
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PropertyListItem/>
            <PropertyListItem/>
            <PropertyListItem/>
            <PropertyListItem/>
            <PropertyListItem/>
            <PropertyListItem/>
        </div>
    )
}