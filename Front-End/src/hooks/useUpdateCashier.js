import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const updateCashierSchema = z.object({
    email: z.string().email({ message: 'Email tidak valid' }),
    password: z.string().min(4, { message: 'Password minimal 4 karakter' }),
    name: z.string().min(1, { message: 'Nama tidak boleh kosong' }),
});

const useUpdateCashier = (cashierId, updatedData) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(updateCashierSchema),
        defaultValues: {
            email: '',
            password: '',
            name: '',
        },
    });

    useEffect(() => {
        if (updatedData && Object.keys(updatedData).length > 0) {
            reset(updatedData);
        }
    }, [updatedData, reset]);

    const onSubmit = async (data) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/kasir/${cashierId}`, data);
            if (!response.data.status) {
                toast.error(response.data.pesan);
                return;
            }
            toast.success(response.data.pesan);
            navigate('/list-kasir');
        } catch (error) {
            toast.error(error);
        }
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};

export default useUpdateCashier;
