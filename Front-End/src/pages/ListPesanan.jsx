import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import Badge from '../components/Badge';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout';
import Modal from '../components/Modal';
import { formatDate } from '../utils/date';

export default function ListPesanan() {
    // TODO: implement search functionality
    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/pesanan');
                setdata(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const deleteOrder = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/pesanan/${id}`);
            if (!response.data.status) {
                toast.error(response.data.pesan);
                return;
            }
            toast.success(response.data.pesan);
            window.location.reload();
        } catch (error) {
            toast.error('Gagal menghapus pesanan', error);
        }
    };

    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='flex items-center justify-between'>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-semibold'>List Pesanan Laundry</h1>
                        <p>Menampilkan semua pesanan pada sistem Tukang Laundry.</p>
                    </div>
                    <Link to='/list-pesanan/tambah-pesanan' className='btn btn-primary'>
                        <Icon icon='material-symbols:add-rounded' />
                        <span>Tambah</span>
                    </Link>
                </div>
                <div className='flex items-center gap-3'>
                    <span>Cari</span>
                    <input type='text' className='input input-secondary' placeholder='Cari nama pelanggan' />
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
                            {data.map((item, i) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{item.namaPelanggan}</td>
                                    <td>{item.namaKasir}</td>
                                    <td>{item.namaPaket}</td>
                                    <td>{item.beratKg}</td>
                                    <td>
                                        <Badge
                                            state={clsx(item.status == 'DIPROSES' ? 'badge-warning' : 'badge-success')}
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
                                        <Link
                                            to={`/list-pesanan/ubah-pesanan/${item.id}`}
                                            className='btn btn-info btn-sm'
                                        >
                                            <Icon icon='tabler:edit' />
                                        </Link>

                                        <Modal.Trigger
                                            htmlFor={`my_modal_${item.id}`}
                                            btnState='btn-error'
                                            className='btn-sm'
                                        >
                                            <Icon icon='tabler:trash' />
                                        </Modal.Trigger>
                                        <Modal modalId={`my_modal_${item.id}`}>
                                            <Modal.Header>Hapus Pesanan</Modal.Header>
                                            <Modal.Body>
                                                <p className='text-sm'>
                                                    Apakah anda yakin ingin menghapus pesanan {item.namaPelanggan}?
                                                </p>
                                                <div className='modal-action flex items-center gap-3'>
                                                    <label htmlFor={`my_modal_${item.id}`} className='cursor-pointer'>
                                                        Tutup
                                                    </label>
                                                    <label
                                                        role='button'
                                                        onClick={() => deleteOrder(item.id)}
                                                        className='btn btn-error text-white'
                                                        htmlFor={`my_modal_${item.id}`}
                                                    >
                                                        Hapus
                                                    </label>
                                                </div>
                                            </Modal.Body>
                                        </Modal>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </MainLayout>
    );
}
