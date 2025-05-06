import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const addPacketSchema = z.object({
    nama: z.string().min(1, { message: 'Nama paket tidak boleh kosong' }),
    harga_per_kg: z
        .number()
        .min(1, { message: 'Harga per kg tidak boleh kosong' })
        .max(1000000, { message: 'Harga per kg tidak valid' }),
    catatan: z.string().optional(),
});

const useAddPacket = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(addPacketSchema) });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/paket', data);
            if (!response.data.status) {
                toast.error(response.data.pesan);
                return;
            }
            toast.success(response.data.pesan);
            navigate('/paket-layanan');
        } catch (error) {
            toast.error('Gagal menambahkan paket', error);
        }
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};

export default useAddPacket;
