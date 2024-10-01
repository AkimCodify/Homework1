import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const ContactContext = createContext(null)

const INITIAL_STATE = {
    contacts: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_CONTACTS":
            return {...state, contacts: action.payload}
        case "ADD_CONTACT":
            return {...state, contacts: [...state.contacts, action.payload]}
        case "DELETE_CONTACT":
            return {...state, contacts: state.contacts.filter(el => el.id === action.payload ? '' : el)}
        
        default:
            return state
    }
}

const ContactContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE) 
    const getContacts = async () => {
        const {data} = await axios.get("http://localhost:8000/contacts")
        dispatch({
            type: "GET_CONTACTS",
            payload: data
        })
    }
    const AddContact = async (newContact) => {
        const {data} = await axios.post("http://localhost:8000/contacts", newContact)
        dispatch({
            type: "ADD_CONTACT",
            payload: data
        })
    }
    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:8000/contacts/${id}`)
        dispatch({
            type: "DELETE_CONTACT",
            payload: {id}
        })
    }
    const editContact = async (filteredContact, id) => {
        await axios.put(`http://localhost:8000/contacts/${id}`, filteredContact)
        getContacts()
    }
    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            getContacts: getContacts,
            AddContact: AddContact,
            deleteContact: deleteContact,
            editContact: editContact
        }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactContextProvider;