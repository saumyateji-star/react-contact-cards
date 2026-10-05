import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import UserList from "./components/UserList";

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    return (
        <div className="app">
            <header className="header">
                <h1>Contact Cards</h1>
                <p>Create and manage contact cards using React.</p>
            </header>

            <main>
                <ContactForm onAddUser={addUser} />
                <UserList users={users} />
            </main>
        </div>
    );
}

export default App;