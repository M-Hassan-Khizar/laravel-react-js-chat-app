import { Fragment, useEffect, useRef, useLayoutEffect, useState } from "react";

export default function ChatMessages({ messages, auth_id }) {
  const messagesEndRef = useRef(null);

  const [showMessage, setShowMessage] = useState([]);

  useEffect(() => {
    // Filter out empty or undefined messages
    const filteredMessages = messages.filter((message) => message?.message);

    // Update the state with filtered messages
    setShowMessage(filteredMessages);
  }, [messages]);

  useLayoutEffect(() => {
    // Scroll to the bottom when the component is first rendered or when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showMessage]); // Updated to use showMessage as dependency

  const isSentMessage = (message) => {
    return message.sender_id === auth_id;
  };

  return (
    <div className="">
      {showMessage.map((message, index) => (
        <Fragment key={index}>
          <div
            className={`${
              isSentMessage(message)
                ? "send-chat justify-end"
                : "receive-chat justify-start"
            } relative flex`}
          >
            <div
              className={`mb-2 max-w-[80%] rounded ${
                isSentMessage(message)
                  ? "bg-violet-200"
                  : "bg-violet-400"
              } px-5 py-2 text-sm ${
                isSentMessage(message) ? "text-slate-500" : "text-white"
              }`}
              ref={messagesEndRef}
            >
              <p>{message?.message}</p>
              <p>{message?.created_at}</p>
            </div>
          </div>
        </Fragment>
      ))}
      {/* This div will serve as a reference for scrolling to bottom */}
      <div ref={messagesEndRef}></div>
    </div>
  );
}

// import { Fragment, useEffect, useRef, useLayoutEffect, useState } from "react";

// export default function ChatMessages({ messages, auth_id }) {
//   const messagesEndRef = useRef(null);

//   const [showMessage,setShowMessage] = useState(messages)

//   useEffect(() => {
//     // Scroll to the bottom when messages change
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//     setShowMessage(messages)
//   }, [messages]);

//   const isReceivedMessage = (message) => {
//     return message.receiver_id === auth_id;
//   };

//   useLayoutEffect(() => {
//     // Scroll to the bottom when the component is first rendered
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []); // Empty dependency array ensures this effect runs only once after initial render

//   return (
//     <div className="" >
//       {showMessage.map((message, index) => (
//         <Fragment key={index}>
//           <div
//             className={`${
//               isReceivedMessage(message)
//                 ? "receive-chat justify-start"
//                 : "send-chat justify-end"
//             } relative flex`}
//           >
//             <div
//               className={`mb-2 max-w-[80%] rounded ${
//                 isReceivedMessage(message)
//                   ? "bg-violet-400"
//                   : "bg-violet-200"
//               } px-5 py-2 text-sm ${
//                 isReceivedMessage(message) ? "text-white" : "text-slate-500"
//               }`}
//               ref={messagesEndRef}
//             >
//               <p>{message?.message}</p>
//               <p>{message?.created_at}</p>
//             </div>
//           </div>
//         </Fragment>
//       ))}
//       {/* This div will serve as a reference for scrolling to bottom */}
//       {/* <div ref={messagesEndRef}></div> */}
//     </div>
//   );
// }
