// Redux store file (store.js)
import { createStore, combineReducers } from 'redux';

// Define initial state for contacts
const initialContactsState = [];

// Contacts reducer
const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const newContact = {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        status: action.payload.status,
      };
      return [...state, newContact];
    case 'DELETE_CONTACT':
      return state.filter(contact => contact.id !== action.payload);
    case 'UPDATE_CONTACT':
      return state.map(contact =>
        contact.id === action.payload.id ? { ...contact, ...action.payload } : contact
      );
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
