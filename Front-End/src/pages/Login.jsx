import React from 'react';
import Input from '../components/Input';

export default function Login() {
    // TODO: implement login functionality
    return (
        <main className='bg-base-100 grid h-screen w-screen place-items-center'>
            <section className='bg-base-200 shadow-base-300 flex items-center gap-8 rounded-lg p-8 shadow'>
                <div className='hidden lg:block'>
                    <img src='login.png' alt='login' />
                </div>
                <form className='space-y-4'>
                    <img src='login-bubbles.svg' alt='login bubbles' className='mx-auto' />
                    <p>Silahkan gunakan email anda untuk masuk.</p>
                    <div>
                        <Input
                            icon='material-symbols:person-outline-rounded'
                            label='Email'
                            placeholder='email@gmail.com'
                        />
                        <Input icon='mdi:password-outline' label='Password' placeholder='*****' />
                    </div>
                    <button className='btn btn-primary w-full'>Login</button>
                </form>
            </section>
        </main>
    );
}
