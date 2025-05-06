import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const addCashierSchema = z.object({
    email: z.string().email({ message: 'Email tidak valid' }),
    password: z.string().min(4, { message: 'Password minimal 4 karakter' }),
    name: z.string().min(1, { message: 'Nama tidak boleh kosong' }),
});

const useAddCashier = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(addCashierSchema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/kasir', data);
            console.log(response.data);
            if (!response.data.status) {
                toast.error(response.data.pesan);
                return;
            }
            toast.success(response.data.pesan);
            navigate('/list-kasir');
        } catch (error) {
            toast.error('Gagal menambahkan kasir', error);
        }
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};

export default useAddCashier;
