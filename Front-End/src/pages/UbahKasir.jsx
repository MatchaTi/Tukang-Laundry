import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';
import useUpdateCashier from '../hooks/useUpdateCashier';

export default function UbahKasir() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const { register, handleSubmit, onSubmit, errors } = useUpdateCashier(id, data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/kasir/${id}`);
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

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
                        label='ID Kasir'
                        icon='material-symbols:local-laundry-service-outline'
                        placeholder='ID Kasir'
                        disabled
                        value={data.id}
                    />
                    <Input
                        label='Nama Kasir'
                        icon='material-symbols:person-outline-rounded'
                        placeholder='Nama Kasir'
                        {...register('name')}
                    />
                    {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}

                    <Input
                        label='Email'
                        icon='ic:outline-email'
                        placeholder='email@gmail.com'
                        type='email'
                        {...register('email')}
                    />
                    {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}

                    <Input
                        label='Password'
                        icon='mdi:password-outline'
                        placeholder='*****'
                        type='password'
                        {...register('password')}
                    />
                    {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}

                    <div className='col-span-2'>
                        <button className='btn btn-primary' type='submit'>
                            <Icon icon='tabler:edit' />
                            <span>Ubah Kasir</span>
                        </button>
                    </div>
                </form>
            </section>
        </MainLayout>
    );
}
