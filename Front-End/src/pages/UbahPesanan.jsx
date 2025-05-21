import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Fieldset from '../components/Fieldset';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';
import useUpdateOrder from '../hooks/useUpdateOrder';
import { getCookie } from '../utils/cookie';

export default function UbahPesanan() {
    let { id } = useParams();
    const userCookie = getCookie();
    const [data, setData] = useState({});
    const [paket, setPaket] = useState([]);
    const [totalHarga, setTotalHarga] = useState(0);
    const { register, handleSubmit, onSubmit, errors, watch, reset } = useUpdateOrder(userCookie.id, id, data);

    const paketId = watch('paketId');
    const beratKg = watch('beratKg');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responsePesanan = await axios.get(`http://localhost:8080/api/v1/pesanan/${id}`);
                const responsePaket = await axios.get('http://localhost:8080/api/v1/paket/active');
                console.log(responsePesanan.data);
                setData(responsePesanan.data);
                setPaket(responsePaket.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

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

    useEffect(() => {
        console.log('Data:', data);
        if (data && Object.keys(data).length > 0) {
            const selectedPaket = paket.find((item) => item.nama === data.namaPaket);
            console.log('Paket:', paket);
            console.log('Selected Paket:', selectedPaket);
            reset({
                kasirId: userCookie.id,
                paketId: selectedPaket.id,
                beratKg: data.beratKg,
                namaPelanggan: data.namaPelanggan,
                catatan: data.catatan || '',
                status: data.status,
            });
        }
    }, [data, reset, userCookie.id, paket]);

    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='space-y-3'>
                    <h1 className='text-lg font-semibold'>Ubah Pesanan</h1>
                    <p>Ubah pesanan pada sistem Tukang Laundry</p>
                </div>

                <form className='grid grid-cols-2 gap-6' onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label='Nama Kasir'
                        icon='material-symbols:person-outline-rounded'
                        placeholder='Nama Kasir'
                        value={data.namaKasir}
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
                            <select
                                className='select w-full'
                                {...register('paketId', { valueAsNumber: true })}
                                defaultValue={data.paketId}
                            >
                                <option value='' disabled>
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
                    <Fieldset>
                        <Fieldset.Legend>Status</Fieldset.Legend>
                        <Fieldset.Body>
                            <select className='select w-full' {...register('status')}>
                                <option value='' disabled>
                                    -- Pilih Status --
                                </option>
                                <option value='DIPROSES'>DIPROSES</option>
                                <option value='SELESAI'>SELESAI</option>
                            </select>
                            {errors.status && <span className='text-red-400'>{errors.status.message}</span>}
                        </Fieldset.Body>
                    </Fieldset>

                    <Input
                        label='Harga'
                        icon='tdesign:money'
                        placeholder='4x3.000 = 12.000'
                        disabled
                        value={totalHarga > 0 ? `${beratKg} kg × ${totalHarga / beratKg} = ${totalHarga}` : ''}
                    />
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
