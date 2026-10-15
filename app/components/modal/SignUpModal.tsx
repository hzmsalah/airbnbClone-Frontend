"use client";
import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";

export default function SignUpModal(){
    //Variables
    const router = useRouter();
    const [email,setEmail] = useState('');
    const [password1,setPassword1] = useState('');
    const [password2,setPassword2] = useState('');
    const [error,setError] = useState<string[]>([]);

    const signupModal = useSignUpModal();

    //Submit function
    const submitSignup = async () => {
        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.post("/api/auth/register", formData)

        if (response.access){
            // handle login

            signupModal.close();
            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })

            setError(tmpErrors)
        }
    }

    const content = (
        <>
            <form 
            action={submitSignup}
            className="space-y-4">
                <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email" 
                type="email" 
                className="
                w-full
                h-13.5
                px-4
                border-gray-300 
                rounded-xl"/>

                <input
                onChange={(e) => setPassword1(e.target.value)}
                placeholder="Your Password" 
                type="password" 
                className="
                w-full
                h-13.5
                px-4
                border-gray-300 
                rounded-xl"/>


                <input
                onChange={(e) => setPassword2(e.target.value)} 
                placeholder="Repeat Password" 
                type="password" 
                className="
                w-full
                h-13.5
                px-4
                border-gray-300 
                rounded-xl"/>

                {error.map((error, index) => {
                    return(
                    <div
                        key={`error_${index}`}
                        className="
                        p-5 
                        bg-airbnb
                        text-white
                        rounded-xl
                        opacity-80">
                            {error}
                    </div>
                    )})
                }
                
                <CustomButton 
                label="Submit"
                onClick={submitSignup}/>

            </form>
        </>
    )
    return(
        <Modal
        isOpen = {signupModal.isOpen}
        close={signupModal.close}
        label = "Sign Up"
        content={content}
        />
    )
}