import React from "react";
import ContactCard from "./ContactCard";

function UserList({ users }) {
    return (
        <section className="user-list-section">
            <h2>Contact List</h2>

            {users.length === 0 ? (
                <p className="empty-message">
                    No contacts added yet.
                </p>
            ) : (
                <div className="user-list">
                    {users.map((user) => (
                        <ContactCard
                            key={user.id}
                            user={user}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default UserList;