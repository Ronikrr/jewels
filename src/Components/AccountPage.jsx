import React, { useState } from 'react';
import EditProfile from './EditProfile';
import AddressBook from './AddressBook';
import ChangePassword from './ChangePassword';
import Orders from './Orders';
import Returns from './Returns';
import TrulyCustomRequests from './TrulyCustomRequests';
import Wishlist from './Wishlist';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('editProfile');

  return (
    <div className="min-h-screen mx-auto max-w-[110rem]">
      {/* Header */}
      <header className="p-4">
        <h1 className="text-center text-3xl font-bold">My Account</h1>
      </header>

      {/* Horizontal Menu */}
      <nav className="p-4 mx-auto max-w-[110rem]">
        <ul className="flex lg:justify-start space-x-6 overflow-x-auto">
          <li
            onClick={() => setActiveTab('editProfile')}
            className={`cursor-pointer lg:text-md text-sm p-2 whitespace-nowrap ${activeTab === 'editProfile' ? 'bg-red-500 text-white' : 'text-black'}`}
          >
            Edit Profile
          </li>
          <li
            onClick={() => setActiveTab('addressBook')}
            className={`cursor-pointer lg:text-md text-sm p-2 whitespace-nowrap ${activeTab === 'addressBook' ? 'bg-red-500 text-white' : 'text-black'}`}
          >
            Address Book
          </li>
          <li
            onClick={() => setActiveTab('changePassword')}
            className={`cursor-pointer lg:text-md text-sm p-2 whitespace-nowrap ${activeTab === 'changePassword' ? 'bg-red-500 text-white' : 'text-black'}`}
          >
            Change Password
          </li>
          <li
            onClick={() => setActiveTab('orders')}
            className={`cursor-pointer lg:text-md text-sm p-2 whitespace-nowrap ${activeTab === 'orders' ? 'bg-red-500 text-white' : 'text-black'}`}
          >
            Orders
          </li>
          <li
            onClick={() => setActiveTab('returns')}
            className={`cursor-pointer lg:text-md text-sm p-2 whitespace-nowrap ${activeTab === 'returns' ? 'bg-red-500 text-white' : 'text-black'}`}
          >
            Returns
          </li>
          <li
            onClick={() => setActiveTab('trulyCustomRequests')}
            className={`cursor-pointer lg:text-md text-sm p-2 whitespace-nowrap ${activeTab === 'trulyCustomRequests' ? 'bg-red-500 text-white' : 'text-black'}`}
          >
            Truly Custom Requests
          </li>
          <li
            onClick={() => setActiveTab('wishlist')}
            className={`cursor-pointer lg:text-md text-sm p-2 whitespace-nowrap ${activeTab === 'wishlist' ? 'bg-red-500 text-white' : 'text-black'}`}
          >
            Wishlist
          </li>
          <li className="cursor-pointer lg:text-md text-sm p-2 whitespace-nowrap text-black">Logout</li>
        </ul>
      </nav>
      <div className='border-b-2 border-gray-200'></div>

      {/* Main Content */}
      <div className="p-6">
        {activeTab === 'editProfile' && <EditProfile />}
        {activeTab === 'addressBook' && <AddressBook />}
        {activeTab === 'changePassword' && <ChangePassword />}
        {activeTab === 'orders' && <Orders />}
        {activeTab === 'returns' && <Returns />}
        {activeTab === 'trulyCustomRequests' && <TrulyCustomRequests />}
        {activeTab === 'wishlist' && <Wishlist />}
      </div>
    </div>
  );
};

export default AccountPage;
