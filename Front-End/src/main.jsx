import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';
import './index.css';
import DetailPaket from './pages/DetailPaket.jsx';
import DetailPesanan from './pages/DetailPesanan.jsx';
import ListKasir from './pages/ListKasir.jsx';
import ListPaket from './pages/ListPaket.jsx';
import ListPesanan from './pages/ListPesanan.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/LandingPage.jsx';
import TambahKasir from './pages/TambahKasir.jsx';
import TambahPaket from './pages/TambahPaket.jsx';
import TambahPesanan from './pages/TambahPesanan.jsx';
import UbahKasir from './pages/UbahKasir.jsx';
import UbahPaket from './pages/UbahPaket.jsx';
import UbahPesanan from './pages/UbahPesanan.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/c/:id' element={<App />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/home' element={<Home />} />
                <Route path='/list-pesanan' element={<ListPesanan />} />
                <Route path='/list-pesanan/tambah-pesanan' element={<TambahPesanan />} />
                <Route path='/list-pesanan/detail-pesanan/:id' element={<DetailPesanan />} />
                <Route path='/list-pesanan/ubah-pesanan/:id' element={<UbahPesanan />} />
                <Route path='/paket-layanan' element={<ListPaket />} />
                <Route path='/paket-layanan/tambah-paket' element={<TambahPaket />} />
                <Route path='/paket-layanan/detail-paket/:id' element={<DetailPaket />} />
                <Route path='/paket-layanan/ubah-paket/:id' element={<UbahPaket />} />
                <Route path='/list-kasir' element={<ListKasir />} />
                <Route path='/list-kasir/tambah-kasir' element={<TambahKasir />} />
                <Route path='/list-kasir/ubah-kasir/:id' element={<UbahKasir />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
