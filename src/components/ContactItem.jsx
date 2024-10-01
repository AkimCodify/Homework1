import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ContactContext } from './ContactContextProvider';

const ContactItem = ({contact}) => {
    const {deleteContact, getContacts, editContact} = useContext(ContactContext)
    const [show, setShow] = useState(false)
    let [Value1, setValue1] = useState(contact.name)
    let [Value2, setValue2] = useState(contact.number)
    const handleEdit = () => {
        let filteredContactObj = {
            name: Value1,
            number: Value2,
            called: false
        }
        editContact(filteredContactObj, contact.id)
        setShow(!show)
    }
    const handleDelete = () => {
        let currentId = contact.id
        deleteContact(currentId)
        console.log(1);
        console.log(1);
        console.log(1);
        console.log(1);
        console.log(1);
        console.log(1);
        console.log(1);
        console.log(1);
        console.log(1);
        console.log(1);
        console.log(1);
        console.log(1);
        getContacts()
    }
    return (
        <li>
            <span>{contact.name}</span>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={(e) => {
                setShow(!show)
            }}>Edit</button>
            {show ? <div>
                <input type="text" value={Value1} onChange={(e) => {
                    setValue1(e.target.value)
                }}/> <input type="text" value={Value2} onChange={(e) => {
                    setValue2(e.target.value)
                }}/> <button onClick={handleEdit}>Save</button
                    ></div> : ''}
        </li>
    );
};

export default ContactItem;