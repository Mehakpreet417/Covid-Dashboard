import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faMap } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-blue-200 fixed h-full w-64 rounded-lg">
      <div className="flex flex-col space-y-4 mt-4">
      <a href="/" className="flex items-center text-xl text-gray-600 hover:text-gray-900 px-6 py-3">
          <FontAwesomeIcon icon={faAddressBook} className="w-6 h-6 mr-2" />
          Contacts
        </a>
        <a href="/charts-maps" className="flex text-xl items-center text-gray-600 hover:text-gray-900 px-6 py-3">
          <FontAwesomeIcon icon={faMap} className="w-6 h-6 mr-2" />
          Charts and Maps
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
