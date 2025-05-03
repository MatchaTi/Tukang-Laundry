import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';
import TambahPesanan from './components/TambahPesanan.jsx';
import './index.css';
import DetailPesanan from './pages/DetailPesanan.jsx';
import ListPesanan from './pages/ListPesanan.jsx';
import Login from './pages/Login.jsx';
import UbahPesanan from './pages/UbahPesanan.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/c/:id' element={<App />} />
                <Route path='/login' element={<Login />} />
                <Route path='/list-pesanan' element={<ListPesanan />} />
                <Route path='/list-pesanan/tambah-pesanan' element={<TambahPesanan />} />
                <Route path='/list-pesanan/detail-pesanan/:id' element={<DetailPesanan />} />
                <Route path='/list-pesanan/ubah-pesanan/:id' element={<UbahPesanan />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
