import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const updatePacketSchema = z.object({
    nama: z.string().min(1, { message: 'Nama paket tidak boleh kosong' }),
    harga_per_kg: z
        .number()
        .min(1, { message: 'Harga per kg tidak boleh kosong' })
        .max(1000000, { message: 'Harga per kg tidak valid' }),
    catatan: z.string().optional(),
    status: z.enum(['AKTIF', 'NONAKTIF']),
});

const useUpdatePacket = (packetId, updatedData) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(updatePacketSchema),
        defaultValues: {
            nama: '',
            harga_per_kg: 0,
            catatan: '',
            status: 'AKTIF',
        },
    });

    useEffect(() => {
        if (updatedData && Object.keys(updatedData).length > 0) {
            reset(updatedData);
        }
    }, [updatedData, reset]);

    const onSubmit = async (data) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/paket/${packetId}`, data);
            if (!response.data.status) {
                toast.error(response.data.pesan);
                return;
            }
            toast.success(response.data.pesan);
            navigate('/paket-layanan');
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

export default useUpdatePacket;
