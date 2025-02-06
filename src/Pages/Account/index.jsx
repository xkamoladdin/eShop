import React, { Component } from 'react';

export default class Account extends Component {
  render() {
    return (
      <div className="container p-4">
        <div className="flex justify-end mt-10 mb-10">
          <p>
            Welcome! <span className="text-[#DB4444]">Md Rimel</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mb-[140px]">
          <div className="lg:w-64 mb-8 lg:mb-0">
            <div className="mb-4">
              <h2 className="text-black font-semibold">Manage My Account</h2>
              <ul className="text-gray-500 pl-8">
                <li className="text-red-500">My Profile</li>
                <li className="hover:text-black cursor-pointer">Address Book</li>
                <li className="hover:text-black cursor-pointer">My Payment Options</li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-black font-semibold">My Orders</h2>
              <ul className="text-gray-500 pl-8">
                <li className="hover:text-black cursor-pointer">My Returns</li>
                <li className="hover:text-black cursor-pointer">My Cancellations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-black font-semibold">My WishList</h2>
            </div>
          </div>

          <div className="mx-auto p-8 shadow-lg w-full lg:w-3/5">
            <h2 className="text-red-500 text-lg font-semibold mb-4">Edit Your Profile</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">First Name</label>
                <input className="w-full p-2 border rounded bg-gray-100" placeholder="Md" />
              </div>
              <div>
                <label className="text-sm">Last Name</label>
                <input className="w-full p-2 border rounded bg-gray-100" placeholder="Rimel" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input className="w-full p-2 border rounded bg-gray-100" placeholder="rimel1111@gmail.com" />
              </div>
              <div>
                <label className="text-sm">Address</label>
                <input className="w-full p-2 border rounded bg-gray-100" placeholder="Kingston, 5236, United States" />
              </div>
            </div>

            <h3 className="mt-6 text-sm font-semibold">Password Changes</h3>

            <div className="mt-2">
              <input className="w-full p-2 border rounded bg-gray-100 mb-2" placeholder="Current Password" />
              <input className="w-full p-2 border rounded bg-gray-100 mb-2" placeholder="New Password" />
              <input className="w-full p-2 border rounded bg-gray-100 mb-4" placeholder="Confirm New Password" />
            </div>

            <div className="flex justify-end gap-5">
              <button className="text-sm">Cancel</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Save Changes</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
