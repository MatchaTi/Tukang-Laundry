import React, { useEffect, useState } from 'react';
import { FaRegUserCircle, FaRegMoneyBillAlt, FaBoxOpen, FaShoppingBasket } from 'react-icons/fa';
import axios from 'axios';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout';
import { getCookie } from '../utils/cookie';
import Card from '../components/Card';

export default function Dashboard() {
    const [dashboard, setDashboard] = useState({});
    const [role, setRole] = useState('');

    useEffect(() => {
        const user = getCookie();
        const userRole = user.role?.toUpperCase();

        setRole(userRole);

        const endpoint =
            userRole === 'ADMIN'
                ? 'http://localhost:8080/api/v1/dashboard/admin'
                : 'http://localhost:8080/api/v1/dashboard/kasir';

        axios
            .get(endpoint)
            .then((res) => setDashboard(res.data))
            .catch((err) => console.error('Gagal memuat data dashboard:', err));
    }, []);

    return (
        <MainLayout>
            <Header />
            <div className='mt-8 flex flex-col gap-4'>
                {role === 'ADMIN' && (
                    <>
                        <Card
                            title='Jumlah Paket'
                            value={dashboard.jumlahPaket || 0}
                            icon={<FaBoxOpen />}
                            bgColor='bg-gradient-to-r from-cyan-500 to-cyan-700'
                        />
                        <div className='flex flex-row justify-between gap-4'>
                            <Card
                                title='Jumlah Kasir'
                                value={dashboard.jumlahKasir || 0}
                                icon={<FaRegUserCircle />}
                                bgColor='bg-gradient-to-r from-purple-500 to-purple-700'
                            />
                            <Card
                                title='Jumlah Pesanan'
                                value={dashboard.jumlahPesanan || 0}
                                icon={<FaRegMoneyBillAlt />}
                                bgColor='bg-gradient-to-r from-rose-400 to-red-500'
                            />
                        </div>
                    </>
                )}
                {role === 'KASIR' && (
                    <Card
                        title='Jumlah Pesanan'
                        value={dashboard.jumlahPesanan || 0}
                        icon={<FaShoppingBasket />}
                        bgColor='bg-gradient-to-r from-rose-400 to-red-500'
                    />
                )}
            </div>
        </MainLayout>
    );
}
