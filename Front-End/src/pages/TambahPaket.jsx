import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';

export default function TambahPaket() {
    // TODO: fetch paket layanan
    // TODO: send data to API
    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='space-y-3'>
                    <h1 className='text-lg font-semibold'>Tambah Paket Layanan</h1>
                    <p>Menambah paket layanan pada sistem Tukang Laundry</p>
                </div>

                <form className='space-y-6'>
                    <Input
                        label='Nama Paket'
                        icon='material-symbols:local-laundry-service-outline'
                        placeholder='Nama Paket'
                    />
                    <Input label='Harga' icon='tdesign:money' placeholder='4x3.000 = 12.000' />
                    <Input label='Catatan' icon='mdi:post-it-note-outline' placeholder='Catatan Pesanan' />
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
