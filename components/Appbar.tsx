import React from 'react';
import { Bell, Settings, LogOut } from 'lucide-react';

export const Appbar = () => {
    return (
        <div className="bg-white shadow-sm border-b border-gray-100 h-16 flex justify-between items-center px-6">
        
            <div className="flex items-center space-x-3">

                <div>
                    <h1 className="text-xl font-bold text-gray-900">Hashim Meer Hashmi</h1>
                    
                </div>
            </div>

            <div className="flex items-center space-x-4">
              
                <button className="relative p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>

               
                <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200">
                    <Settings className="w-5 h-5" />
                </button>

                
                <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                    <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">Hello</div>
                        <button aria-placeholder='hello'  className="text-xs text-gray-500 border-indigo-600">Download Resume </button>
                    </div>
                    
                   
                    <div className="relative group">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center border-2 border-orange-200 hover:border-orange-400 transition-all duration-200 cursor-pointer">
                            <span className="text-lg">👋</span>
                        </div>
                        
                     
                        <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="p-3 border-b border-gray-100">
                                <div className="text-sm font-medium text-gray-900">User Account</div>
                                <div className="text-xs text-gray-500">user@example.com</div>
                            </div>
                            <div className="p-2">
                                <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                    <Settings className="w-4 h-4" />
                                    <span>Account Settings</span>
                                </button>
                                <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                    <LogOut className="w-4 h-4" />
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};