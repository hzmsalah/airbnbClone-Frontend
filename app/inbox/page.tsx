import Image from "next/image"
import Conversation from "../components/inbox/Conversation"

export default function InboxPage(){
    return(
        <main className="max-w-full mx-auto px-6 pb-6 space-y-4">
            <h1 className="text-2xl my-6">
                Inbox
            </h1>

            <Conversation/>
            <Conversation/>
            <Conversation/>
        </main>
    )
}