import React from 'react';
import Navbar from './Navbar';

export default function MainLayout({ children }) {
    return (
        <div className='flex'>
            <Navbar />
            <main className='p-10'>{children}</main>
        </div>
    );
}
