import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';
import useAddCashier from '../hooks/useAddCashier';

export default function TambahKasir() {
    const { register, handleSubmit, onSubmit, errors } = useAddCashier();

    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='space-y-3'>
                    <h1 className='text-lg font-semibold'>Tambah Kasir</h1>
                    <p>Menambah kasir pada sistem Tukang Laundry</p>
                </div>

                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label='Nama Kasir'
                        icon='material-symbols:person-outline-rounded'
                        placeholder='Nama Kasir'
                        {...register('name')}
                    />
                    {errors.name && <span className='text-red-400'>{errors.name.message}</span>}

                    <Input
                        label='Email'
                        icon='ic:outline-email'
                        placeholder='email@gmail.com'
                        type='email'
                        {...register('email')}
                    />
                    {errors.email && <span className='text-red-400'>{errors.email.message}</span>}

                    <Input
                        label='Password'
                        icon='mdi:password-outline'
                        placeholder='*****'
                        type='password'
                        {...register('password')}
                    />
                    {errors.password && <span className='text-red-400'>{errors.password.message}</span>}

                    <div className='col-span-2'>
                        <button className='btn btn-primary' type='submit'>
                            <Icon icon='material-symbols:add-rounded' />
                            <span>Tambah Kasir</span>
                        </button>
                    </div>
                </form>
            </section>
        </MainLayout>
    );
}
