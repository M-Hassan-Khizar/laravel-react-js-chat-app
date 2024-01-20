import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function ChatSidebar({ recentMessages }) {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter users based on search term
    const filteredUsers = recentMessages.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="search-box text-slate-300">
                <div className="flex justify-between px-5 pb-1 border-b border-slate-100">
                    <form className="flex items-center justify-center">
                        <i className="pr-2 fa fa-search"></i>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="font-light border-0 hover:border-0 focus:border-0 focus:ring-0 !shadow-none focus:outline-none"
                        />
                    </form>
                    <div>
                        <button className="relative">
                            <i className="fa fa-message"></i>
                            <i className="absolute text-sm fa fa-plus -top-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-screen overflow-y-auto bg-white user-list" style={{ height: '78vh' }}>
                {filteredUsers.map((user, index) => (
                    <Link
                        href={`/chat/${user.user_id}`}
                        key={index}
                        className="flex px-5 py-3 transition hover:bg-slate-100 hover:cursor-pointer"
                    >
                        <div className="pr-4">
                            {user?.avatar !== undefined ? (
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                                    width="50"
                                    alt={user.name}
                                />
                            ) : (
                                <i className="text-5xl text-gray-300 fa fa-user-circle"></i>
                            )}
                        </div>
                        <div>
                            <h3 className="text-violet-500 tex-md">
                                {user.name.length > 0 ? user.name : "N/A"}
                            </h3>
                            <p className="h-5 overflow-hidden text-sm font-light text-gray-400">
                                {user.message}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}


// import { Link } from "@inertiajs/react";

// export default function ChatSidebar({ recentMessages }) {
//     return (
//         <>
//             <div className=" search-box text-slate-300" >
//                 <div className="flex justify-between px-5 pb-1 border-b border-slate-100">
//                     <form className="flex items-center justify-center">
//                         <i className="pr-2 fa fa-search"></i>
//                         <input
//                             type="text"
//                             name="search"
//                             id="search"
//                             placeholder="Search"
//                             className="font-light border-0 hover:border-0 focus:border-0 focus:ring-0 !shadow-none focus:outline-none"
//                         />
//                     </form>
//                     <div>
//                         <button className="relative">
//                             <i className="fa fa-message"></i>
//                             <i className="absolute text-sm fa fa-plus -top-2"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="h-screen overflow-y-auto bg-white user-list"  style={{ height:'78vh'}}>
//                 {
//                 recentMessages.map((user, index) => (
//                     <Link
//                     href={`/chat/${user.user_id}`}
//                         key={index}
//                         className="flex px-5 py-3 transition hover:bg-slate-100 hover:cursor-pointer"
//                     >
//                         <div className="pr-4">
//                             {user?.avatar !== undefined ? (
//                                 <img
//                                     src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
//                                     width="50"
//                                 />
//                             ) : (
//                                 <i className="text-5xl text-gray-300 fa fa-user-circle"></i>
//                             )}
//                             {/* <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" width="50" /> */}
//                         </div>
//                         <div>
//                             <h3 className="text-violet-500 tex-md">
//                                 {user.name.length > 0 ? user.name : "N/A"}
//                             </h3>
//                             <p className="h-5 overflow-hidden text-sm font-light text-gray-400">
//                                 {user.message}
//                             </p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </>
//     );
// }
