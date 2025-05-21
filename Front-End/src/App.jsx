import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './pages/Dashboard';
import DetailPaket from './pages/DetailPaket';
import DetailPesanan from './pages/DetailPesanan';
import LandingPage from './pages/LandingPage';
import ListKasir from './pages/ListKasir';
import ListPaket from './pages/ListPaket';
import ListPesanan from './pages/ListPesanan';
import Login from './pages/Login';
import TambahKasir from './pages/TambahKasir';
import TambahPaket from './pages/TambahPaket';
import TambahPesanan from './pages/TambahPesanan';
import UbahKasir from './pages/UbahKasir';
import UbahPaket from './pages/UbahPaket';
import UbahPesanan from './pages/UbahPesanan';

function App() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
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
    );
}

export default App;
