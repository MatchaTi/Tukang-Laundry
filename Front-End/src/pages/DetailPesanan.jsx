import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { useParams } from 'react-router';
import Badge from '../components/Badge';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';

export default function DetailPesanan() {
    let { id } = useParams();
    console.log(id);
    // TODO: Fetch data from API
    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='flex items-center justify-between'>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-semibold'>Detail Pesanan</h1>
                        <p>Melihat detail pesanan pada sistem Tukang Laundry</p>
                    </div>
                    <div className='flex min-w-fit items-center gap-3'>
                        <div className='min-w-fit'>Status Pesanan: </div>
                        <Badge state='badge-success'>Selesai</Badge>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-6'>
                    <Input
                        label='Nama Kasir'
                        icon='material-symbols:person-outline-rounded'
                        placeholder='Nama Kasir'
                        disabled
                    />
                    <Input label='Nama Pelanggan' icon='ic:outline-person-add' placeholder='Nama Pelanggan' disabled />
                    <Input label='Berat' icon='mdi:weight-kilogram' placeholder='Berat Cucian' disabled />
                    <Input label='Paket Layanan' icon='mingcute:wash-machine-line' placeholder='Nama Paket' disabled />
                    <Input label='Catatan' icon='mdi:post-it-note-outline' placeholder='Catatan Pesanan' disabled />
                    <Input label='Harga' icon='tdesign:money' placeholder='4x3.000 = 12.000' disabled />
                    <div className='col-span-2'>
                        <button className='btn btn-primary'>
                            <Icon icon='material-symbols:print-outline-rounded' />
                            <span>Cetak Detail</span>
                        </button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
