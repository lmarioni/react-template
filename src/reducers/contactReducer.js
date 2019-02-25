import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, EDIT_CONTACT } from '../actions/types';

const initialState = {
    contacts: [],
    contacto: {}
};

export default function(state = initialState, action) {
    switch(action.type){
        case GET_CONTACTS:
        return {
            ...state,
            contacts : action.payload,
        };

        case DELETE_CONTACT:
          return {
            ...state,
            contacts: state.contacts.filter(contact =>
              contact.id !== action.payload)
          }

          case ADD_CONTACT:
          return {
            ...state,
            contacts: [action.payload, ...state.contacts]
          }
          case GET_CONTACT:
          return {
            ...state,
            contactoEdit:  state.contacts.filter(contact =>
              contact.id == action.payload)
          }
          case EDIT_CONTACT:
          return{
            ...state,
            contacts: state.contacts.map(contact =>
              contact.id === action.payload.id ? contact = action.payload : contact)
          }
        default:
        return state;
    }
}