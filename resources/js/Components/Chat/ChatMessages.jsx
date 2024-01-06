import { Fragment, useEffect, useRef, useLayoutEffect } from "react";

export default function ChatMessages({ messages, auth_id }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const isReceivedMessage = (message) => {
    return message.receiver_id === auth_id;
  };

  useLayoutEffect(() => {
    // Scroll to the bottom when the component is first rendered
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="">
      {(messages || []).map((message, index) => (
        <Fragment key={index}>
          <div
            className={`${
              isReceivedMessage(message)
                ? "receive-chat justify-start"
                : "send-chat justify-end"
            } relative flex`}
          >
            <div
              className={`mb-2 max-w-[80%] rounded ${
                isReceivedMessage(message)
                  ? "bg-violet-400"
                  : "bg-violet-200"
              } px-5 py-2 text-sm ${
                isReceivedMessage(message) ? "text-white" : "text-slate-500"
              }`}
            >
              <p>{message?.message}</p>
            </div>
          </div>
        </Fragment>
      ))}
      {/* This div will serve as a reference for scrolling to bottom */}
      <div ref={messagesEndRef}></div>
    </div>
  );
}
