import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const updateOrderSchema = z.object({
    kasirId: z.number().min(1, { message: 'Kasir tidak boleh kosong' }),
    paketId: z.number().min(1, { message: 'Paket tidak boleh kosong' }),
    beratKg: z.number().min(1, { message: 'Berat tidak boleh kosong' }).max(1000, { message: 'Berat tidak valid' }),
    namaPelanggan: z.string().min(1, { message: 'Nama pelanggan tidak boleh kosong' }),
    catatan: z.string().optional(),
    status: z.enum(['DIPROSES', 'SELESAI']),
});

const useUpdateOrder = (kasirId, orderId) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm({
        resolver: zodResolver(updateOrderSchema),
        defaultValues: {
            kasirId,
            paketId: 0,
            beratKg: 0,
            namaPelanggan: '',
            catatan: '',
            status: 'DIPROSES',
        },
    });

    const onSubmit = async (data) => {
        console.log(data);
        console.log(orderId);
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/pesanan/${orderId}`, data);
            if (!response.data.status) {
                toast.error(response.data.pesan);
                return;
            }
            toast.success(response.data.pesan);
            navigate('/list-pesanan');
        } catch (error) {
            toast.error('Gagal menambahkan pesanan', error);
        }
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        watch,
        reset,
    };
};

export default useUpdateOrder;
