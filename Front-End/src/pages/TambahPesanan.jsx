import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Fieldset from '../components/Fieldset';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';
import useAddOrder from '../hooks/useAddOrder';
import { getCookie } from '../utils/cookie';

export default function TambahPesanan() {
    const userCookie = getCookie();
    const [paket, setPaket] = useState([]);
    const [totalHarga, setTotalHarga] = useState(0);
    const { register, handleSubmit, onSubmit, errors, watch } = useAddOrder(userCookie.id);

    const paketId = watch('paketId');
    const beratKg = watch('beratKg');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/paket');
                const data = response.data;
                setPaket(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (paketId && beratKg) {
            const selectedPaket = paket.find((item) => item.id === parseInt(paketId));
            if (selectedPaket) {
                const harga = selectedPaket.harga_per_kg * beratKg;
                setTotalHarga(harga);
            }
        } else {
            setTotalHarga(0);
        }
    }, [paketId, beratKg, paket]);

    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='space-y-3'>
                    <h1 className='text-lg font-semibold'>Tambah Pesanan</h1>
                    <p>Tambah pesanan pada sistem Tukang Laundry</p>
                </div>

                <form className='grid grid-cols-2 gap-6' onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label='Nama Kasir'
                        icon='material-symbols:person-outline-rounded'
                        placeholder='Nama Kasir'
                        value={userCookie.nama}
                        disabled
                    />
                    <div>
                        <Input
                            label='Nama Pelanggan'
                            icon='ic:outline-person-add'
                            placeholder='Nama Pelanggan'
                            {...register('namaPelanggan')}
                        />
                        {errors.namaPelanggan && <span className='text-red-400'>{errors.namaPelanggan.message}</span>}
                    </div>

                    <div>
                        <Input
                            label='Berat'
                            icon='mdi:weight-kilogram'
                            placeholder='Berat Cucian'
                            type='number'
                            {...register('beratKg', { valueAsNumber: true })}
                        />
                        {errors.beratKg && <span className='text-red-400'>{errors.beratKg.message}</span>}
                    </div>

                    <Fieldset>
                        <Fieldset.Legend>Nama Paket</Fieldset.Legend>
                        <Fieldset.Body>
                            <select className='select w-full' {...register('paketId', { valueAsNumber: true })}>
                                <option value='' disabled selected>
                                    -- Pilih Paket --
                                </option>
                                {paket.map((item, i) => (
                                    <option key={i} value={item.id}>
                                        {item.nama} -{' '}
                                        {new Intl.NumberFormat('id-ID', {
                                            style: 'currency',
                                            currency: 'IDR',
                                            minimumFractionDigits: 0,
                                        }).format(item.harga_per_kg)}
                                        /kg
                                    </option>
                                ))}
                            </select>
                            {errors.paketId && <span className='text-red-400'>{errors.paketId.message}</span>}
                        </Fieldset.Body>
                    </Fieldset>

                    <div>
                        <Input
                            label='Catatan'
                            icon='mdi:post-it-note-outline'
                            placeholder='Catatan Pesanan'
                            {...register('catatan')}
                        />
                        {errors.catatan && <span className='text-red-400'>{errors.catatan.message}</span>}
                    </div>

                    <Input
                        label='Harga'
                        icon='tdesign:money'
                        placeholder='4x3.000 = 12.000'
                        disabled
                        value={totalHarga > 0 ? `${beratKg} kg × ${totalHarga / beratKg} = ${totalHarga}` : ''}
                    />
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
