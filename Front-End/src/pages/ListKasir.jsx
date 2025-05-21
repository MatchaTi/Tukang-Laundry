import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import Badge from '../components/Badge';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout';
import Modal from '../components/Modal';

export default function ListKasir() {
    // TODO: implement search functionality
    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/kasir');
                setdata(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const deleteCashier = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/kasir/${id}`);
            if (!response.data.status) {
                toast.error(response.data.pesan);
                return;
            }
            toast.success(response.data.pesan);
            window.location.reload();
        } catch (error) {
            toast.error('Gagal menghapus kasir', error);
        }
    };

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
                            {data.length > 0 ? (
                                data.map((item, i) => (
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <Badge state='badge-success'>{item.role}</Badge>
                                        </td>
                                        <td className='flex items-center justify-end gap-3'>
                                            <Link
                                                to={`/list-kasir/ubah-kasir/${item.id}`}
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
                                                <Modal.Header>Hapus Kasir</Modal.Header>
                                                <Modal.Body>
                                                    <p className='text-sm'>
                                                        Apakah anda yakin ingin menghapus kasir {item.name}?
                                                    </p>
                                                    <div className='modal-action flex items-center gap-3'>
                                                        <label
                                                            htmlFor={`my_modal_${item.id}`}
                                                            className='cursor-pointer'
                                                        >
                                                            Tutup
                                                        </label>
                                                        <label
                                                            role='button'
                                                            onClick={() => deleteCashier(item.id)}
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
                                ))
                            ) : (
                                <tr>
                                    <td colSpan='5' className='text-center'>
                                        Belum ada data
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
