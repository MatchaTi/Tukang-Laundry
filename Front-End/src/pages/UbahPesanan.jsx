import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { useParams } from 'react-router';
import Badge from '../components/Badge';
import Fieldset from '../components/Fieldset';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';

export default function UbahPesanan() {
    let { id } = useParams();
    console.log(id);
    // TODO: Fetch data from API
    // TODO: fetch paket layanan
    // TODO: send data to API
    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='flex items-center justify-between'>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-semibold'>Ubah Pesanan</h1>
                        <p>Mengubah pesanan pada sistem Tukang Laundry</p>
                    </div>
                    <div className='flex min-w-fit items-center gap-3'>
                        <div className='min-w-fit'>Status Pesanan: </div>
                        <Badge state='badge-success'>Selesai</Badge>
                    </div>
                </div>

                <form className='grid grid-cols-2 gap-6'>
                    <Input
                        label='Nama Kasir'
                        icon='material-symbols:person-outline-rounded'
                        placeholder='Nama Kasir'
                        disabled
                    />
                    <Input label='Nama Pelanggan' icon='ic:outline-person-add' placeholder='Nama Pelanggan' />
                    <Input label='Berat' icon='mdi:weight-kilogram' placeholder='Berat Cucian' type='number' />
                    <Fieldset>
                        <Fieldset.Legend>Nama Paket</Fieldset.Legend>
                        <Fieldset.Body>
                            <select className='select w-full'>
                                <option value='express'>Express</option>
                                <option value='reguler'>Reguler</option>
                            </select>
                        </Fieldset.Body>
                    </Fieldset>
                    <Input label='Catatan' icon='mdi:post-it-note-outline' placeholder='Catatan Pesanan' />
                    <Input label='Harga' icon='tdesign:money' placeholder='4x3.000 = 12.000' disabled />
                    <Fieldset>
                        <Fieldset.Legend>Status</Fieldset.Legend>
                        <Fieldset.Body>
                            <select className='select w-full'>
                                <option value='menunggu'>Menunggu</option>
                                <option value='diproses'>Diproses</option>
                                <option value='selesai'>Selesai</option>
                            </select>
                        </Fieldset.Body>
                    </Fieldset>
                    <div className='col-span-2'>
                        <button className='btn btn-primary'>
                            <Icon icon='tabler:edit' />
                            <span>Ubah Pesanan</span>
                        </button>
                    </div>
                </form>
            </section>
        </MainLayout>
    );
}
