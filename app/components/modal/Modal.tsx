'use client'

import { useState, useEffect, useCallback } from "react";


interface ModalProperties{
    label: string;
    close: () => void;
    content: React.ReactElement;
    isOpen: boolean;
}

export default function Modal({label, close, content, isOpen}:ModalProperties){
    const [showModal, setShowModal] = useState(isOpen);

    const handleClose = useCallback(() => {
        setShowModal(false);

        setTimeout(()=>{
            close();
        },300)
    },[close])

    useEffect(() => {
        setShowModal(isOpen)
    },[isOpen])
    if (!isOpen){
        return(
            <>
            </>
        )
    }

    

    return(
        // Dark Background
        <div className="
        flex
        items-center
        justify-center
        fixed
        inset-0
        z-50
        bg-black/60">
            {/* Modal Attributes */}
            <div className="
            relative
            w-[90%]
            md:w-[80%]
            lg:w-175
            my-6
            h-auto
            mx-auto">
                {/* Modal Animation */}
                <div className=
                {`translate duration-200 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'}`}>
                    {/* Modal Content */}
                    <div className="
                    w-full
                    h-auto
                    rounded-xl
                    relative
                    flex
                    flex-col
                    bg-white">
                        
                        <header className="
                        flex
                        items-center
                        p-4
                        rounded-t
                        justify-center
                        relative
                        border-b
                        border-gray-300">
                            <div 
                            onClick={handleClose}
                            className="
                            p-3
                            absolute
                            left-3
                            hover:bg-gray-300
                            rounded-full
                            cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </div>

                            <h2 className="
                            text-lg
                            font-bold">
                                {label}
                            </h2>
                        </header>

                        <section className="
                        p-6">
                            {content}
                        </section>

                    </div>
                </div>
            </div>
        </div>
    )
}