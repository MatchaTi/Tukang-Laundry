import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';

export default function MainLayout({ children }) {
    return (
        <div className='font-inter flex'>
            <Toaster />
            <Navbar />
            <main className='w-full p-10 text-sm'>{children}</main>
        </div>
    );
}
