import React, { useContext, useEffect } from "react";
import AddContact from "./components/AddContact";
import { ContactContext } from "./components/ContactContextProvider";
import ContactItem from "./components/ContactItem";
import ContactList from "./components/ContactList";

function App() {
  const {contacts, getContacts} = useContext(ContactContext)
  useEffect(() => {
    getContacts()
  }, [])
  return (
    <div className="App">
      <AddContact/>
      <h1>Contact List</h1>
      <ContactList>
        <div>
          {contacts.map((el) => (
            <ContactItem contact={el} key={el.id} />
          ))}
        </div>
      </ContactList>
    </div>
  );
}

export default App;
