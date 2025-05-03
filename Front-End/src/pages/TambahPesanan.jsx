import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import Fieldset from '../components/Fieldset';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';
import { getCookie } from '../utils/cookie';

export default function TambahPesanan() {
    const userCookie = getCookie();
    // TODO: fetch paket layanan
    // TODO: send data to API
    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='space-y-3'>
                    <h1 className='text-lg font-semibold'>Tambah Pesanan</h1>
                    <p>Tambah pesanan pada sistem Tukang Laundry</p>
                </div>

                <form className='grid grid-cols-2 gap-6'>
                    <Input
                        label='Nama Kasir'
                        icon='material-symbols:person-outline-rounded'
                        placeholder='Nama Kasir'
                        value={userCookie.name}
                        disabled
                    />
                    <Input label='Nama Pelanggan' icon='ic:outline-person-add' placeholder='Nama Pelanggan' />
                    <Input label='Berat' icon='mdi:weight-kilogram' placeholder='Berat Cucian' type='number' />
                    <Fieldset>
                        <Fieldset.Legend>Nama Paket</Fieldset.Legend>
                        <Fieldset.Body>
                            <select className='select w-full'>
                                <option value='express' disabled>
                                    -- Pilih Paket --
                                </option>
                                <option value='express'>Express</option>
                                <option value='reguler'>Reguler</option>
                            </select>
                        </Fieldset.Body>
                    </Fieldset>
                    <Input label='Catatan' icon='mdi:post-it-note-outline' placeholder='Catatan Pesanan' />
                    <Input label='Harga' icon='tdesign:money' placeholder='4x3.000 = 12.000' disabled />
                    <div className='col-span-2'>
                        <button className='btn btn-primary'>
                            <Icon icon='material-symbols:add-rounded' />
                            <span>Tambah Pesanan</span>
                        </button>
                    </div>
                </form>
            </section>
        </MainLayout>
    );
}
