import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';
import useAddPacket from '../hooks/useAddPacket';

export default function TambahPaket() {
    // TODO: fetch paket layanan
    // TODO: send data to API
    const { register, handleSubmit, onSubmit, errors } = useAddPacket();

    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='space-y-3'>
                    <h1 className='text-lg font-semibold'>Tambah Paket Layanan</h1>
                    <p>Menambah paket layanan pada sistem Tukang Laundry</p>
                </div>

                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label='Nama Paket'
                        icon='material-symbols:local-laundry-service-outline'
                        placeholder='Nama Paket'
                        {...register('nama')}
                    />
                    {errors.name && <span className='text-red-400'>{errors.name.message}</span>}

                    <Input
                        type='number'
                        label='Harga'
                        icon='tdesign:money'
                        placeholder='4x3.000 = 12.000'
                        {...register('harga_per_kg', { valueAsNumber: true })}
                    />
                    {errors.price && <span className='text-red-400'>{errors.price.message}</span>}

                    <Input
                        label='Catatan'
                        icon='mdi:post-it-note-outline'
                        placeholder='Catatan Pesanan'
                        {...register('catatan')}
                    />
                    {errors.note && <span className='text-red-400'>{errors.note.message}</span>}
                    <div className='col-span-2'>
                        <button className='btn btn-primary'>
                            <Icon icon='material-symbols:add-rounded' />
                            <span>Tambah Paket</span>
                        </button>
                    </div>
                </form>
            </section>
        </MainLayout>
    );
}
