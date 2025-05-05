import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import Badge from '../components/Badge';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout';
import Modal from '../components/Modal';

export default function ListPaket() {
    // TODO: implement search functionality
    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/paket');
                setdata(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const deletePacket = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/paket/${id}`);
            if (!response.data.status) {
                toast.error(response.data.pesan);
                return;
            }
            toast.success(response.data.pesan);
            window.location.reload();
        } catch (error) {
            toast.error('Gagal menghapus paket', error);
        }
    };

    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='flex items-center justify-between'>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-semibold'>List Paket Layanan</h1>
                        <p>Menampilkan semua paket layanan pada sistem Tukang Laundry.</p>
                    </div>
                    <Link to='/paket-layanan/tambah-paket' className='btn btn-primary'>
                        <Icon icon='material-symbols:add-rounded' />
                        <span>Tambah</span>
                    </Link>
                </div>
                <div className='flex items-center gap-3'>
                    <span>Cari</span>
                    <input type='text' className='input input-secondary' placeholder='Cari nama paket' />
                </div>

                <div className='bg-base-100 overflow-x-auto'>
                    <table className='table-zebra table'>
                        <thead className='bg-base-200'>
                            <tr>
                                <th>No</th>
                                <th>Nama Paket</th>
                                <th>Harga per Kilo</th>
                                <th>Status</th>
                                <th className='text-end'>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, i) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{item.nama}</td>
                                    <td>{item.harga_per_kg}</td>
                                    <td>
                                        <Badge
                                            state={clsx(item.status === 'AKTIF' ? 'badge-success' : 'badge-warning')}
                                        >
                                            {item.status}
                                        </Badge>
                                    </td>
                                    <td className='flex items-center justify-end gap-3'>
                                        <Link
                                            to={`/paket-layanan/detail-paket/${item.id}`}
                                            className='btn btn-primary btn-sm'
                                        >
                                            <Icon icon='iconoir:eye' />
                                        </Link>
                                        <Link
                                            to={`/paket-layanan/ubah-paket/${item.id}`}
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
                                            <Modal.Header>Hapus Paket Layanan</Modal.Header>
                                            <Modal.Body>
                                                <p className='text-sm'>
                                                    Apakah anda yakin ingin menghapus paket {item.nama}?
                                                </p>
                                                <div className='modal-action flex items-center gap-3'>
                                                    <label htmlFor={`my_modal_${item.id}`} className='cursor-pointer'>
                                                        Tutup
                                                    </label>
                                                    <label
                                                        role='button'
                                                        onClick={() => deletePacket(item.id)}
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
