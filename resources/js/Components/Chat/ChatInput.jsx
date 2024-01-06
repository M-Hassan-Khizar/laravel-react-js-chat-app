import { useForm } from "@inertiajs/react";
import TextInput from "../TextInput";
import { useState } from "react";

export default function ChatInput({ receiver }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });

    const [message, setMessage] = useState('');



    const onHandleChange = (event) => {

        // alert(event.target.name+ '    ' + event.target.value)
        setData(event.target.name, event.target.value);
        // alert(event.target.name+ '    ' + event.target.value)
        setMessage(event.target.value);

    };

    const submit = (e) => {
        e.preventDefault();
        setMessage('')
        // alert(123)
        // var content = document.getElementById('new_message_div');
        // content.scrollTop += 100;

        post(route("chat.store", receiver?.id));
        // reset("message");
    };
    return (
        <div className="fixed bottom-0 w-full pl-4 bg-white">
            <form onSubmit={submit}>
                <TextInput
                   className="h-16 w-full overflow-y-auto bg-white pt-3 font-light border-0 hover:border-0 focus:border-0 focus:ring-0 !shadow-none focus:!outline-none"
                   placeholder="Write a message"
                    name="message"
                    // defaultValue={message}
                    value={message}
                    onChange={(e)=>onHandleChange(e)}
                />
            </form>
        </div>
    );
}
