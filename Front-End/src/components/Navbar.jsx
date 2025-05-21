import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router';
import { adminItems, kasirItems } from '../constants/navItems';
import { getCookie } from '../utils/cookie';

export default function Navbar() {
    const pathName = useLocation().pathname;
    let navItems;

    const userCookie = getCookie();
    if (!userCookie) window.location.href = '/login';
    if (userCookie.role === 'Admin') navItems = adminItems;
    else if (userCookie.role === 'Kasir') navItems = kasirItems;

    return (
        <nav className='bg-base-200 sticky top-0 h-screen min-w-fit space-y-10 p-6 text-sm'>
            <section className='flex items-center gap-4'>
                <div className='h-15 w-15'>
                    <img src='/login-bubbles.svg' alt='bubbles' className='h-full w-full' />
                </div>
                <span className='font-semibold'>Tukang Laundry</span>
            </section>

            <section className='space-y-10'>
                {navItems.map((item, index) => (
                    <div key={index} className='space-y-4'>
                        <h3>{item.title}</h3>
                        <ul className='space-y-2'>
                            {item.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                    <Link
                                        to={subItem.href}
                                        className={clsx(
                                            'btn w-full justify-start font-normal',
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
