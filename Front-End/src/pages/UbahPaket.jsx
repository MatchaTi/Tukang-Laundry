import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import Fieldset from '../components/Fieldset';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';

export default function UbahPaket() {
    // TODO: fetch paket layanan
    // TODO: send data to API
    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='space-y-3'>
                    <h1 className='text-lg font-semibold'>Ubah Paket Layanan</h1>
                    <p>Mengubah paket layanan pada sistem Tukang Laundry</p>
                </div>

                <form className='space-y-6'>
                    <Input
                        label='Nama Paket'
                        icon='material-symbols:local-laundry-service-outline'
                        placeholder='Nama Paket'
                    />
                    <Input label='Harga' icon='tdesign:money' placeholder='4x3.000 = 12.000' />
                    <Input label='Catatan' icon='mdi:post-it-note-outline' placeholder='Catatan Pesanan' />
                    <Fieldset>
                        <Fieldset.Legend>Status Paket</Fieldset.Legend>
                        <Fieldset.Body>
                            <select className='select w-full'>
                                <option value='aktif'>Aktif</option>
                                <option value='nonaktif'>Nonaktif</option>
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
