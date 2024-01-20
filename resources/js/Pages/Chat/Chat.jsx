import ChatInput from "@/Components/Chat/ChatInput";
import ChatMessages from "@/Components/Chat/ChatMessages";
import ChatSidebar from "@/Components/Chat/ChatSidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ChatInfoUserHeader from "@/Components/Chat/ChatInfoUserHeader";
import { InertiaProgress } from '@inertiajs/progress';
import { useEffect, useState } from "react";

export default function Chat(props) {

    const [newMessagesSingle, setNewMessageSingle] = useState('')

    InertiaProgress.init({ color: '#4B5563' });

    const { auth, errors, recentMessages, receiver, messages } = props;
    const [newMessages, setNewMessages] = useState(messages)

    useEffect(() => {
        setNewMessages(prevMessages => [...prevMessages, newMessagesSingle]);
    }, [newMessagesSingle])

    Echo.private('messenger.1.2')
        .listen('MessageSent', (e) => {
            let newMessage = {
                created_at: "Seconds ago",
                id: 319,
                message: e.message.message,
                receiver_id: 10,
                sender_id: 6,
            }
            setNewMessageSingle(newMessage)
        });

    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <style>
                {`
                    body {
                        overflow: hidden;
                    }
                `}
            </style>
            <div className="">
                <div className="h-screen p-4 overflow messanger" style={{ height: '65vh' }}>
                    <div className="flex">
                        <div className="pt-3 bg-white border-r basis-2/6 border-slate-100">
                            <ChatSidebar recentMessages={recentMessages} />
                        </div>
                        <div className="basis-4/6" >
                            <ChatInfoUserHeader receiver={receiver} />
                            {receiver?.id ? (
                                <div className="overflow-auto" style={{ height: '65vh', backgroundColor: 'gray' }}>
                                    <div className="mt-4 messanger">
                                        <div className="px-4">
                                            <ChatMessages
                                                messages={newMessages}
                                                auth_id={auth?.user?.id}
                                            />
                                        </div>
                                        <ChatInput receiver={receiver} />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-screen bg-slate-100">
                                    <p className="text-3xl font-bold text-gray-500">
                                        Please select a User to start chatting...
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
