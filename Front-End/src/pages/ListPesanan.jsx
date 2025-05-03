import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import Badge from '../components/Badge';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout';
import Modal from '../components/Modal';

export default function ListPesanan() {
    // TODO: implement search functionality
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
                            {Array.from({ length: 10 }, (_, i) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>Mahmud</td>
                                    <td>Raana</td>
                                    <td>Express</td>
                                    <td>10kg</td>
                                    <td>
                                        <Badge state='badge-success'>Selesai</Badge>
                                    </td>
                                    <td>11 Feb 2025 18:48</td>
                                    <td>11 Feb 2025 18:48</td>
                                    <td className='flex items-center gap-3'>
                                        <Link
                                            to={`/list-pesanan/detail-pesanan/${i}`}
                                            className='btn btn-primary btn-sm'
                                        >
                                            <Icon icon='iconoir:eye' />
                                        </Link>
                                        <Link to={`/list-pesanan/ubah-pesanan/${i}`} className='btn btn-info btn-sm'>
                                            <Icon icon='tabler:edit' />
                                        </Link>

                                        <Modal.Trigger
                                            htmlFor={`my_modal_${i}`}
                                            btnState='btn-error'
                                            className='btn-sm'
                                        >
                                            <Icon icon='tabler:trash' />
                                        </Modal.Trigger>
                                        <Modal modalId={`my_modal_${i}`}>
                                            <Modal.Header>Hapus Pesanan</Modal.Header>
                                            <Modal.Body>
                                                <p className='text-sm'>
                                                    Apakah anda yakin ingin menghapus pesanan {i}?
                                                </p>
                                                <div className='modal-action flex items-center gap-3'>
                                                    <label htmlFor={`my_modal_${i}`} className='cursor-pointer'>
                                                        Tutup
                                                    </label>
                                                    <label
                                                        role='button'
                                                        onClick={() => toast.success('Pesanan berhasil dihapus!')}
                                                        className='btn btn-error text-white'
                                                        htmlFor={`my_modal_${i}`}
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
