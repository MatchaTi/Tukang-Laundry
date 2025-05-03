import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';
import './index.css';
import ListPesanan from './pages/ListPesanan.jsx';
import Login from './pages/Login.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/c/:id' element={<App />} />
                <Route path='/login' element={<Login />} />
                <Route path='/list-pesanan' element={<ListPesanan />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
