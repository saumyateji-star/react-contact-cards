import React, { useState } from "react";

function ContactForm({ onAddUser }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name.trim() || !email.trim() || !phone.trim()) {
            return;
        }

        const newUser = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim()
        };

        onAddUser(newUser);

        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <section className="form-section">
            <h2>Add Contact</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />

                <button type="submit">
                    Add Contact
                </button>
            </form>
        </section>
    );
}

export default ContactForm;