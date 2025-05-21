import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Badge from '../components/Badge';
import Header from '../components/Header';
import Input from '../components/Input';
import MainLayout from '../components/MainLayout';

export default function DetailPesanan() {
    let { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/pesanan/${id}`);
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
                <div className='flex items-center justify-between'>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-semibold'>Detail Pesanan</h1>
                        <p>Melihat detail pesanan pada sistem Tukang Laundry</p>
                    </div>
                    <div className='flex min-w-fit items-center gap-3'>
                        <div className='min-w-fit'>Status Pesanan: </div>
                        <Badge state={clsx(data.status == 'DIPROSES' ? 'badge-warning' : 'badge-success')}>
                            {data.status}
                        </Badge>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-6'>
                    <Input
                        label='Nama Kasir'
                        icon='material-symbols:person-outline-rounded'
                        placeholder='Nama Kasir'
                        value={data.namaKasir}
                        disabled
                    />
                    <Input
                        label='Nama Pelanggan'
                        icon='ic:outline-person-add'
                        placeholder='Nama Pelanggan'
                        disabled
                        value={data.namaPelanggan}
                    />
                    <Input
                        label='Berat'
                        icon='mdi:weight-kilogram'
                        placeholder='Berat Cucian'
                        disabled
                        value={data.beratKg}
                    />
                    <Input
                        label='Paket Layanan'
                        icon='mingcute:wash-machine-line'
                        placeholder='Nama Paket'
                        disabled
                        value={data.namaPaket}
                    />
                    <Input
                        label='Catatan'
                        icon='mdi:post-it-note-outline'
                        placeholder='Catatan Pesanan'
                        disabled
                        value={data.catatan}
                    />
                    <Input
                        label='Harga'
                        icon='tdesign:money'
                        placeholder='4x3.000 = 12.000'
                        disabled
                        value={data.beratKg * data.hargaPaket}
                    />
                </div>
            </section>
        </MainLayout>
    );
}
