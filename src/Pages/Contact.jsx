import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar';

const Contacts = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleDeleteContact = (id) => {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    };

    const handleEditContact = (id) => {
      navigate(`/edit-contact/${encodeURIComponent(id)}`);
    };

    const handleCreateContact = () => {
      navigate('/create-contact');
    };

    return(
        <div>
            <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-4xl font-bold text-center">Contact Page</h1>
      </div>
    </header>
        
       <div className=" flex flex-row bg-gray-200 p-8 pt-0 pl-0 ">
      
            <div> <Navbar /></div> 
            <div className="container ml-96 mr-24 my-24 pt-12 pb-24 bg-red-200 rounded shadow flex flex-col items-center justify-end">
                    <div className="pt-8 p-10"><button onClick={handleCreateContact} className=" text-2xl bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mb-4">
                        Create New Contact
                    </button></div>
                    {/* Display contacts if available */}
        {contacts.length > 0 ? (
          <div className="grid grid-cols-3 gap-8">
          {contacts.map((contact) => (
            <div key={contact.id} className="border border-gray-500 p-4 rounded">
              <h3 className="text-xl font-bold mb-2">{contact.firstName} {contact.lastName}</h3>
              <p className="text-gray-700">Status: {contact.status}</p>
              <div className="mt-4">
                <button onClick={() => handleEditContact(contact.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => handleDeleteContact(contact.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        ) : (
          /* Display "No contact found" message if no contacts available */
          <div className="flex flex-row items-center justify-center box-border max-h-48 max-w-3xl min-w-min p-4 border-4">
                        <div className=" items-center justify-center bg-gray-400 w-12 h-12 rounded-full">
                        <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500 items-center justify-center bg-white w-12 h-12 rounded-full" />
                        </div>
                        <div className="text-base"><p className="ml-2">No contact found.Please add new contact from Create New Contact.</p></div>
          </div>
        )}
                
            </div>
        </div>
        </div>
    );


};

export default Contacts;