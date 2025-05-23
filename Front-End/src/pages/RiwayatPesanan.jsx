import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Badge from '../components/Badge';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout';
import { formatDate } from '../utils/date';

export default function RiwayatPesanan() {
    const [data, setdata] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/pesanan/riwayat');
                setdata(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const filteredData = data.filter((item) => item.namaPelanggan.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='flex items-center justify-between'>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-semibold'>Riwayat Pesanan Laundry</h1>
                        <p>Menampilkan semua riwayat pada sistem Tukang Laundry.</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <span>Cari</span>
                    <input
                        type='text'
                        className='input input-secondary'
                        placeholder='Cari nama pelanggan'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className='bg-base-100 overflow-x-auto'>
                    <table className='table-zebra table'>
                        <thead className='bg-base-200'>
                            <tr>
                                <th>No</th>
                                <th>Nama Pelanggan</th>
                                <th>Nama Kasir</th>
                                <th>Jenis Paket</th>
                                <th>Berat</th>
                                <th>Status</th>
                                <th>Tanggal Pesanan</th>
                                <th>Tanggal Selesai</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, i) => (
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{item.namaPelanggan}</td>
                                        <td>{item.namaKasir}</td>
                                        <td>{item.namaPaket}</td>
                                        <td>{item.beratKg}</td>
                                        <td>
                                            <Badge
                                                state={clsx(
                                                    item.status == 'DIPROSES' ? 'badge-warning' : 'badge-success',
                                                )}
                                            >
                                                {item.status}
                                            </Badge>
                                        </td>
                                        <td>{formatDate(new Date(item.tanggalPesan))}</td>
                                        <td>
                                            {item.tanggalSelesai ? (
                                                formatDate(new Date(item.tanggalSelesai))
                                            ) : (
                                                <Badge state='badge-warning'>Belum Selesai</Badge>
                                            )}
                                        </td>
                                        <td className='flex items-center gap-3'>
                                            <Link
                                                to={`/list-pesanan/detail-pesanan/${item.id}`}
                                                className='btn btn-primary btn-sm'
                                            >
                                                <Icon icon='iconoir:eye' />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan='9' className='text-center'>
                                        {searchQuery ? 'Tidak ada hasil yang cocok' : 'Belum ada data'}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </MainLayout>
    );
}
