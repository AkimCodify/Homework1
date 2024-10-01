import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { ContactContext } from './ContactContextProvider';

const AddContact = () => {
    const {AddContact} = useContext(ContactContext)
    const handleAdd = () => {
        const newContactObj = {
            name: Cvalue,
            number: Nvalue,
            called: false
        }
        AddContact(newContactObj)
    }
    const [Cvalue, setCvalue] = useState('')
    const [Nvalue, setNvalue] = useState('')
    return (
        <div>
            <h1>Add Contacts</h1>
            <input type="text" value={Cvalue} onChange={(e) => {
                setCvalue(e.target.value)
            }}/>
            <input type="text" value={Nvalue} onChange={(e) => {
                setNvalue(e.target.value)
            }}/>
            <button onClick={(e) => {
                handleAdd()
            }}>Add</button>
        </div>
    );
};

export default AddContact;