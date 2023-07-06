import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../Navbar/Navbar';

const CreateContacts = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

  // Generate a unique ID
  const id = uuidv4(); // Generate a v4 UUID

  // Dispatch action to save contact in the Redux store
  dispatch({
    type: 'ADD_CONTACT',
    payload: { id, firstName, lastName, status },
  });

  // Navigate back to the Contacts page after form submission
  navigate('/');
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
            <div className="container ml-96 mr-24 mb-12 mt-20 pt-6 pb-12 bg-pink-200 rounded shadow flex flex-col items-center justify-end">
            <div className="pt-8 font-bold text-gray-600 text-4xl p-10"><h1>Create New Contact</h1></div>
                <div className="flex flex-col items-start justify-center border-double  border-gray-500  min-w-min p-4 border-4">
     
                            <div className="mb-4 flex flex-row">
                                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2 p-2">
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    required
                                    />
                            </div>
                            <div className="mb-4 flex flex-row">
                                <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2 p-2">
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-500 "
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    required
                                />
                            </div>
                            <div className="mb-4 flex flex-row">
                                <label htmlFor="status" className="block text-gray-700 font-bold mb-2 p-2 ">
                                    Status:
                                </label>
                                <select
                                    id="status"
                                    className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-500 "
                                    value={status}
                                    onChange={handleStatusChange}
                                    required
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-full"
                            >
                                Save Contact
                            </button>
                     
                </div>
            </div>
        </div>
        </div>
    );


};

export default CreateContacts;