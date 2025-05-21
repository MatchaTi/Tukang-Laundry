import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const addOrderSchema = z.object({
    kasirId: z.number().min(1, { message: 'Kasir tidak boleh kosong' }),
    paketId: z.number().min(1, { message: 'Paket tidak boleh kosong' }),
    beratKg: z.number().min(1, { message: 'Berat tidak boleh kosong' }).max(1000, { message: 'Berat tidak valid' }),
    namaPelanggan: z.string().min(1, { message: 'Nama pelanggan tidak boleh kosong' }),
    catatan: z.string().optional(),
});

const useAddOrder = (kasirId) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({ resolver: zodResolver(addOrderSchema), defaultValues: { kasirId } });

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/pesanan', data);
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
    };
};

export default useAddOrder;
