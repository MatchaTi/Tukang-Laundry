import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Fieldset from '../components/Fieldset';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';
import useUpdatePacket from '../hooks/useUpdatePacket';

export default function UbahPaket() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const { register, handleSubmit, onSubmit, errors } = useUpdatePacket(id, data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/paket/${id}`);
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
                    <h1 className='text-lg font-semibold'>Ubah Paket Layanan</h1>
                    <p>Mengubah paket layanan pada sistem Tukang Laundry</p>
                </div>

                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label='ID Paket'
                        icon='material-symbols:local-laundry-service-outline'
                        placeholder='ID Paket'
                        disabled
                        value={data.id}
                    />
                    <Input
                        label='Nama Paket'
                        icon='material-symbols:local-laundry-service-outline'
                        placeholder='Nama Paket'
                        {...register('nama')}
                    />
                    {errors.nama && <p className='text-sm text-red-500'>{errors.nama.message}</p>}

                    <Input
                        label='Harga'
                        icon='tdesign:money'
                        type='number'
                        placeholder='4x3.000 = 12.000'
                        {...register('harga_per_kg', { valueAsNumber: true })}
                    />
                    {errors.harga_per_kg && <p className='text-sm text-red-500'>{errors.harga_per_kg.message}</p>}

                    <Input
                        label='Catatan'
                        icon='mdi:post-it-note-outline'
                        placeholder='Catatan Pesanan'
                        {...register('catatan')}
                    />
                    {errors.catatan && <p className='text-sm text-red-500'>{errors.catatan.message}</p>}

                    <Fieldset>
                        <Fieldset.Legend>Status Paket</Fieldset.Legend>
                        <Fieldset.Body>
                            <select className='select w-full' defaultValue={data.status} {...register('status')}>
                                <option value='AKTIF'>Aktif</option>
                                <option value='NONAKTIF'>Nonaktif</option>
                            </select>
                        </Fieldset.Body>
                    </Fieldset>
                    <div className='col-span-2'>
                        <button className='btn btn-primary' type='submit'>
                            <Icon icon='tabler:edit' />
                            <span>Ubah Pesanan</span>
                        </button>
                    </div>
                </form>
            </section>
        </MainLayout>
    );
}
