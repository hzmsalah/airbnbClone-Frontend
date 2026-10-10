"use client";
import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

export default function LoginModal(){
    const loginModal = useLoginModal();

    const content = (
        <>
            <h2 className="
            mb-6
            text-2xl">
                Welcome to Airbnb (Clone), Please Log In
            </h2>

            <form className="space-y-4">
                <input
                placeholder="Your Email" 
                type="email" 
                className="
                w-full
                h-13.5
                px-4
                border-gray-300 
                rounded-xl"/>

                <input
                placeholder="Your Password" 
                type="password" 
                className="
                w-full
                h-13.5
                px-4
                border-gray-300 
                rounded-xl"/>

                <div className="
                p-5 
                bg-airbnb
                text-white
                rounded-xl
                opacity-80">
                    Error
                </div>
                <CustomButton 
                label="Submit"
                onClick={() => {console.log("Submitted")}}/>

            </form>
        </>
    )
    return(
        <Modal
        isOpen = {loginModal.isOpen}
        close={loginModal.close}
        label = "Log In"
        content={content}
        />
    )
}