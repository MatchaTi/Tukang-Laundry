import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import Badge from '../components/Badge';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout';
import Modal from '../components/Modal';

export default function ListKasir() {
    // TODO: implement search functionality
    return (
        <MainLayout>
            <Header />
            <section className='bg-base-200 shadow-base-300 mt-10 space-y-6 rounded-lg p-6 shadow'>
                <div className='flex items-center justify-between'>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-semibold'>List Kasir</h1>
                        <p>Menampilkan semua kasir pada sistem Tukang Laundry.</p>
                    </div>
                    <Link to='/list-kasir/tambah-kasir' className='btn btn-primary'>
                        <Icon icon='material-symbols:add-rounded' />
                        <span>Tambah</span>
                    </Link>
                </div>
                <div className='flex items-center gap-3'>
                    <span>Cari</span>
                    <input type='text' className='input input-secondary' placeholder='Cari nama kasir' />
                </div>

                <div className='bg-base-100 overflow-x-auto'>
                    <table className='table-zebra table'>
                        <thead className='bg-base-200'>
                            <tr>
                                <th>No</th>
                                <th>Nama Kasir</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th className='text-end'>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }, (_, i) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>Raana</td>
                                    <td>raana@gmail.com</td>
                                    <td>
                                        <Badge state='badge-success'>Kasir</Badge>
                                    </td>
                                    <td className='flex items-center justify-end gap-3'>
                                        <Link to={`/list-kasir/ubah-kasir/${i}`} className='btn btn-info btn-sm'>
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
                                            <Modal.Header>Hapus Kasir</Modal.Header>
                                            <Modal.Body>
                                                <p className='text-sm'>Apakah anda yakin ingin menghapus kasir {i}?</p>
                                                <div className='modal-action flex items-center gap-3'>
                                                    <label htmlFor={`my_modal_${i}`} className='cursor-pointer'>
                                                        Tutup
                                                    </label>
                                                    <label
                                                        role='button'
                                                        onClick={() => toast.success('Kasir berhasil dihapus!')}
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
