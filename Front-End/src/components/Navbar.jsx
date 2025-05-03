import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import React from 'react';
import { Link, useLocation } from 'react-router';
import { adminItems, kasirItems } from '../constants/navItems';

export default function Navbar() {
    const pathName = useLocation().pathname;
    const dataUser = {
        id: 1,
        name: 'John Doe',
        role: 'admin',
    };
    document.cookie = `user=${JSON.stringify(dataUser)}`;
    const cookie = document.cookie;
    const userCookie = JSON.parse(cookie.split('=')[1]);
    let navItems;

    if (userCookie.role === 'admin') navItems = adminItems;
    else if (userCookie.role === 'kasir') navItems = kasirItems;

    return (
        <nav className='bg-base-200 sticky top-0 h-screen space-y-10 p-6'>
            <section className='flex items-center gap-4'>
                <div className='h-15 w-15'>
                    <img src='login-bubbles.svg' alt='bubbles' className='h-full w-full' />
                </div>
                <span className='font-semibold'>Tukang Laundry</span>
            </section>

            <section className='space-y-10'>
                {navItems.map((item, index) => (
                    <div key={index} className='space-y-4'>
                        <h3 className='font-semibold'>{item.title}</h3>
                        <ul className='space-y-2'>
                            {item.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                    <Link
                                        to={subItem.href}
                                        className={clsx(
                                            'btn w-full justify-start',
                                            pathName.startsWith(subItem.href) ? 'btn-primary' : 'btn-ghost',
                                        )}
                                    >
                                        <Icon icon={subItem.icon} />
                                        {subItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </nav>
    );
}
