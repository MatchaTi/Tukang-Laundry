import React from 'react';
import Fieldset from '../components/Fieldset';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';

export default function DetailPaket() {
    // TODO: fetch paket layanan
    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='space-y-3'>
                    <h1 className='text-lg font-semibold'>Detail Paket Layanan</h1>
                    <p>Menampilkan detail paket layanan pada sistem Tukang Laundry</p>
                </div>

                <div className='space-y-6'>
                    <Input
                        label='Nama Paket'
                        icon='material-symbols:local-laundry-service-outline'
                        placeholder='Nama Paket'
                        disabled
                    />
                    <Input label='Harga' icon='tdesign:money' placeholder='4x3.000 = 12.000' disabled />
                    <Input label='Catatan' icon='mdi:post-it-note-outline' placeholder='Catatan Pesanan' disabled />
                    <Fieldset>
                        <Fieldset.Legend>Status Paket</Fieldset.Legend>
                        <Fieldset.Body>
                            <select className='select w-full' disabled>
                                <option value='aktif'>Aktif</option>
                                <option value='nonaktif'>Nonaktif</option>
                            </select>
                        </Fieldset.Body>
                    </Fieldset>
                </div>
            </section>
        </MainLayout>
    );
}
