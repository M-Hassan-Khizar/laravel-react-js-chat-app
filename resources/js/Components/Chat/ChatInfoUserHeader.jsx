import { Link } from '@inertiajs/react';

export default function ChatInfoUserHeader({ receiver }) {
    // Check if receiver is defined and has an id property
    if (!receiver || !receiver.id) {
        return null; // or handle it according to your needs
    }

    return (
        <div className="px-5 py-3 bg-white user-info-header" style={{ position: 'sticky', top: 0 }}>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Link href={`/profile/${receiver.id}`}>
                        {receiver?.avatar !== undefined ? (
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                                width="50"
                                alt={receiver.name}
                            />
                        ) : (
                            <i className="text-5xl text-gray-300 fa fa-user-circle"></i>
                        )}
                    </Link>

                    <h3 className="pl-4 text-gray-400 text-md">
                        {receiver?.name}
                    </h3>
                </div>
                <div>
                    <i className="fa fa-message text-violet-300"></i>
                    <i className="ml-3 text-gray-200 fa fa-video"></i>
                    <i className="ml-3 text-gray-200 fa fa-phone"></i>
                </div>
            </div>
        </div>
    );
}
