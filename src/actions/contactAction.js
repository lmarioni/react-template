import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_CONTACT } from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch ({
        type: GET_CONTACTS,
        payload: res.data
    });
};

export const deleteContact = (id) => async dispatch => {

    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(res.status === 200 ){
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }
};

export const addContact = (contact) => async dispatch => {
   const res = await axios.post("https://jsonplaceholder.typicode.com/users",contact);

    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    })
};

export const editContact = (updContact) => async dispatch => {
   const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${updContact.id}`,updContact);
   
   dispatch({
       type: EDIT_CONTACT,
       payload: updContact
   })
}

export const getContact = (id) => dispatch => {
     dispatch({
        type: GET_CONTACT,
        payload: id
    })
}
