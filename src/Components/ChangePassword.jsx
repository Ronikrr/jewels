import React, { useState } from 'react';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    // Handle change password (API call)
  };

  return (
    <div className=' mx-auto max-w-[110rem]'>
      <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
      <div className="mb-4">
        <label>Current Password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button onClick={handleChangePassword} className="bg-blue-500 text-white p-2 rounded">
        Change Password
      </button>
    </div>
  );
};

export default ChangePassword;
