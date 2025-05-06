import React from 'react';
import { Link } from 'react-scroll';
import { MdCheckCircle } from 'react-icons/md';

export default function LandingPage() {
    return (
        <main className='w-full'>
            <nav className='bg-base-100 fixed z-50 flex w-screen items-center justify-between px-48 py-5'>
                <img className='w-72' src='logo.svg' alt='logo' />
                <div className='flex gap-10'>
                    <Link
                        className='cursor-pointer transition-all duration-300 hover:scale-105'
                        to='beranda'
                        smooth='true'
                    >
                        Beranda
                    </Link>
                    <Link
                        className='cursor-pointer transition-all duration-300 hover:scale-105'
                        to='cara-kerja'
                        smooth='true'
                    >
                        Cara Kerja
                    </Link>
                    <Link
                        className='cursor-pointer transition-all duration-300 hover:scale-105'
                        to='paket'
                        smooth='true'
                    >
                        Paket
                    </Link>
                </div>
            </nav>
            <section className='flex h-screen w-full items-center justify-between px-48' id='beranda'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-5xl font-bold'>Kalau bukan hari ini cucinya, besok siap-siap tanpa baju.</h1>
                    <p>Cuci, kering, lipat. Hemat waktu, hemat biaya. Antar-jemput? Siap!</p>
                    <Link className='text-base-100 w-fit rounded-4xl bg-cyan-500 px-8 py-4 transition-all duration-300 hover:bg-cyan-600'>
                        Bagaimana Cara Kerjanya
                    </Link>
                </div>
                <img className='w-lg' src='landingicon.png' alt='' />
            </section>
            <section
                className='flex h-fit w-full flex-col items-center justify-between gap-10 bg-cyan-100 px-48 py-16'
                id='cara-kerja'
            >
                <div className='flex flex-col items-center gap-1'>
                    <h2 className='text-cyan-500'>Cara Kerja</h2>
                    <h1 className='text-5xl font-bold'>Selesai dalam 4 Tahap</h1>
                </div>
                <div className='flex w-full justify-between'>
                    <div className='bg-base-100 flex h-80 w-56 flex-col items-center justify-between rounded-2xl p-6 transition-all hover:scale-105'>
                        <h2 className='text-cyan-500'>Langkah 1</h2>
                        <h1 className='text-2xl font-bold'>Penjemputan</h1>
                        <img src='penjemputan.png' alt='' />
                    </div>
                    <div className='bg-base-100 flex h-80 w-56 flex-col items-center justify-between rounded-2xl p-6 text-center transition-all hover:scale-105'>
                        <h2 className='text-cyan-500'>Langkah 2</h2>
                        <h1 className='text-2xl font-bold'>Cuci dan Keringkan</h1>
                        <img src='cuci.png' alt='' />
                    </div>
                    <div className='bg-base-100 flex h-80 w-56 flex-col items-center justify-between rounded-2xl p-6 transition-all hover:scale-105'>
                        <h2 className='text-cyan-500'>Langkah 3</h2>
                        <h1 className='text-2xl font-bold'>Lipat</h1>
                        <img src='lipat.png' alt='' />
                    </div>
                    <div className='bg-base-100 flex h-80 w-56 flex-col items-center justify-between rounded-2xl p-6 transition-all hover:scale-105'>
                        <h2 className='text-cyan-500'>Langkah 4</h2>
                        <h1 className='text-2xl font-bold'>Pengantaran</h1>
                        <img src='pengantaran.png' alt='' />
                    </div>
                </div>
            </section>
            <section
                className='bg-base-100 flex h-fit w-full flex-col items-center justify-between gap-10 px-48 py-16'
                id='paket'
            >
                <div className='flex flex-col items-center gap-1'>
                    <h2 className='text-cyan-500'>Paket Layanan</h2>
                    <h1 className='text-5xl font-bold'>Paket Terlaris</h1>
                </div>
                <div className='flex w-full justify-between'>
                    <div className='flex h-80 w-72 flex-col items-center justify-between rounded-2xl bg-cyan-50 p-6 transition-all hover:scale-105'>
                        <h1 className='text-3xl font-bold text-cyan-500'>Paket Reguler</h1>
                        <h2>Benefit:</h2>
                        <div>
                            <div className='flex items-center gap-1'>
                                <MdCheckCircle />
                                <p>2–3 hari kerja</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <MdCheckCircle />
                                <p>Cuci, kering, dan lipat</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <MdCheckCircle />
                                <p>Cocok untuk pakaian sehari-hari</p>
                            </div>
                        </div>
                        <Link className='text-base-100 w-full cursor-pointer rounded-4xl bg-cyan-500 px-8 py-4 text-center transition-all duration-300 hover:bg-cyan-600'>
                            Rp 7.000/KG
                        </Link>
                    </div>
                    <div className='flex h-80 w-72 flex-col items-center justify-between rounded-2xl bg-cyan-100 p-6 transition-all hover:scale-105'>
                        <h1 className='text-3xl font-bold text-cyan-500'>Paket Express</h1>
                        <h2>Benefit:</h2>
                        <div>
                            <div className='flex items-center gap-1'>
                                <MdCheckCircle />
                                <p>Selesai dalam 24 jam</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <MdCheckCircle />
                                <p>Cuci, kering, setrika, dan lipat</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <MdCheckCircle className='text-3xl' />
                                <p>Cocok untuk pakaian kerja atau kebutuhan mendesak</p>
                            </div>
                        </div>
                        <Link className='text-base-100 w-full cursor-pointer rounded-4xl bg-cyan-500 px-8 py-4 text-center transition-all duration-300 hover:bg-cyan-600'>
                            Rp 15.000/KG
                        </Link>
                    </div>
                    <div className='flex h-80 w-72 flex-col items-center justify-between rounded-2xl bg-cyan-50 p-6 transition-all hover:scale-105'>
                        <h1 className='text-3xl font-bold text-cyan-500'>Paket Premium</h1>
                        <h2>Benefit:</h2>
                        <div>
                            <div className='flex items-center gap-1'>
                                <MdCheckCircle />
                                <p>2–3 hari kerja</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <MdCheckCircle />
                                <p>Cuci, kering, dan lipat</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <MdCheckCircle />
                                <p>Cuci khusus, pewangi premium, setrika</p>
                            </div>
                        </div>
                        <Link className='text-base-100 w-full cursor-pointer rounded-4xl bg-cyan-500 px-8 py-4 text-center transition-all duration-300 hover:bg-cyan-600'>
                            Rp 25.000/KG
                        </Link>
                    </div>
                </div>
            </section>
            <section className='bg-base-100 flex h-fit w-full flex-col items-center justify-between gap-10 px-48 py-16'>
                <div className='flex w-full flex-col items-center gap-5 rounded-2xl bg-cyan-500 p-20'>
                    <h1 className='text-base-100 text-3xl font-semibold'>Cucian numpuk? Kami yang beresin!</h1>
                    <Link className='bg-base-100 hover:bg-base-300 w-fit cursor-pointer rounded-4xl px-8 py-4 text-center text-cyan-500 transition-all duration-300'>
                        Laundry Sekarang
                    </Link>
                </div>
            </section>
            <footer className='bg-base-100 flex h-fit w-full flex-col justify-between gap-10 px-48 py-16'>
                <div className='flex w-full justify-between border-b-2 pb-10'>
                    <img src='logo.svg' alt='' />
                    <div className='flex flex-col gap-5 text-right'>
                        <Link>Support</Link>
                        <Link>About Us</Link>
                        <Link>Contact Us</Link>
                    </div>
                </div>
                <p>© 2025 TukangLaundry. Seluruh hak cipta dilindungi. Dikembangkan oleh Kelompok 1 PA PBO.</p>
            </footer>
        </main>
    );
}
