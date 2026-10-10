"use client";
import Modal from "./Modal";
import { useState } from "react";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import CustomButton from "../forms/CustomButton";

export default function SignUpModal(){
    const signupModal = useSignUpModal();

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


                <input
                placeholder="Repeat Password" 
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
        isOpen = {signupModal.isOpen}
        close={signupModal.close}
        label = "Log In"
        content={content}
        />
    )
}