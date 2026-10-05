import React from "react";

function ContactCard({ user }) {
    return (
        <article className="contact-card">
            <h3>{user.name}</h3>

            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <p>
                <strong>Phone:</strong> {user.phone}
            </p>
        </article>
    );
}

export default ContactCard;