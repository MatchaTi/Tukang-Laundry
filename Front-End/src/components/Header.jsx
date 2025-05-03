import React from 'react';
import { destroyCookie, getCookie } from '../utils/cookie';
import { getCurrentDate } from '../utils/date';

export default function Header() {
    const userCookie = getCookie();

    return (
        <section className='flex w-full items-center justify-between'>
            <div className='space-y-3'>
                <h2 className='text-lg font-semibold'>Selamat Datang, {userCookie.name}</h2>
                <p>{getCurrentDate()}</p>
            </div>

            <button onClick={() => destroyCookie()} type='buttton' className='btn btn-primary'>
                Logout
            </button>
        </section>
    );
}
