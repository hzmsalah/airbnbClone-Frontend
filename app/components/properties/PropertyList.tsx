'use client'

import { useEffect, useState } from "react"
import PropertyListItem from "./PropertyListItem"
import apiService from "@/app/services/apiService"

export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
}


export default function PropertyList(){
    const [properties, setProperties] = useState<PropertyType[]>([]);
    
    const getProperties = async () => {
        const url = '/api/properties/'
        const tempProperties = await apiService.get(url)
        setProperties(tempProperties.data);
    };

    useEffect(()=>{
        getProperties();
    },[])

    return(
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property)=>{
                return(
                    <PropertyListItem 
                    key ={property.id}
                    property={property}/>
                )
            })}
        </div>
    )
}