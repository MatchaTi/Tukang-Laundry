import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Input from '../components/Input';
import useLogin from '../hooks/useLogin';
import { getCookie } from '../utils/cookie';

export default function Login() {
    useEffect(() => {
        const userCookie = getCookie();
        if (userCookie) window.location.href = '/';
    }, []);

    const { register, handleSubmit, onSubmit, errors } = useLogin();

    return (
        <main className='bg-base-100 grid h-screen w-screen place-items-center'>
            <Toaster />
            <section className='bg-base-200 shadow-base-300 flex items-center gap-8 rounded-lg p-8 shadow'>
                <div className='hidden lg:block'>
                    <img src='login.png' alt='login' />
                </div>
                <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                    <img src='login-bubbles.svg' alt='login bubbles' className='mx-auto' />
                    <p>Silahkan gunakan email anda untuk masuk.</p>
                    <div>
                        <Input
                            icon='material-symbols:person-outline-rounded'
                            label='Email'
                            placeholder='email@gmail.com'
                            {...register('email')}
                        />
                        {errors.email && <span className='text-red-400'>{errors.email.message}</span>}

                        <Input
                            icon='mdi:password-outline'
                            type='password'
                            label='Password'
                            placeholder='*****'
                            {...register('password')}
                        />
                        {errors.password && <span className='text-red-400'>{errors.password.message}</span>}
                    </div>
                    <button className='btn btn-primary w-full'>Login</button>
                </form>
            </section>
        </main>
    );
}
