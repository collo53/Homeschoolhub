import React from "react"
import { User, Mail, Phone, MapPin, Key, Bell } from "lucide-react"

export default function StudentAccountHero() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Account Settings</h1>
          <p className="text-slate-600 mt-1">Manage your profile and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-slate-800">
              <User className="h-5 w-5 text-slate-600" />
              Personal Information
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                <input id="firstName" defaultValue="Principal" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                <input id="lastName" defaultValue="Smith" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                <input id="email" type="email" defaultValue="principal.smith@lincolnhigh.edu" className="pl-10 w-full border border-gray-300 px-3 py-2 rounded-md" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                <input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="pl-10 w-full border border-gray-300 px-3 py-2 rounded-md" />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Office Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                <input id="address" defaultValue="Lincoln High School, Main Office" className="pl-10 w-full border border-gray-300 px-3 py-2 rounded-md" />
              </div>
            </div>

            <button className=" bg-black text-white px-4 py-2 rounded hover:bg-[#ffc01d] hover:text-black transition">Save Changes</button>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-slate-800">
              <Key className="h-5 w-5 text-slate-600" />
              Security Settings
            </div>

            <div className="mb-4">
              <label htmlFor="currentPassword" className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
              <input id="currentPassword" type="password" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
            </div>

            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
              <input id="newPassword" type="password" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1">Confirm New Password</label>
              <input id="confirmPassword" type="password" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
            </div>

            <hr className="my-6" />

            <div className="mb-4">
              <h4 className="font-medium text-slate-900 mb-1">Two-Factor Authentication</h4>
              <p className="text-sm text-slate-600 mb-2">Add an extra layer of security to your account</p>
              <button className="border border-slate-300 px-4  bg-[#ffc01d] text-black py-2 rounded hover:bg-slate-100 transition">Enable 2FA</button>
            </div>

            <button className="bg-black text-white px-4 py-2 rounded hover:bg-[#ffc01d] hover:text-black transition">Update Password</button>
          </div>
        </div>

        <div>
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-slate-800">
              <Bell className="h-5 w-5 text-slate-600" />
              Notification Preferences
            </div>

            <div className="space-y-4">
              {[
                { title: "Email Notifications", desc: "Receive updates via email" },
                { title: "SMS Alerts", desc: "Emergency notifications only" },
                { title: "Weekly Reports", desc: "Automated summary reports" },
                { title: "Calendar Reminders", desc: "Event and meeting alerts" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 accent-blue-600" />
                </div>
              ))}
            </div>

            <button className="mt-6 border border-slate-300 w-full text-black py-2 rounded hover:bg-slate-600 transition">Save Preferences</button>
          </div>
        </div>
      </div>
    </div>
  )
}
