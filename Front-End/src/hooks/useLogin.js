import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { setCookie } from '../utils/cookie';

const loginSchema = z.object({
    email: z.string().email('Email tidak valid'),
    password: z.string().min(4, 'Password minimal 4 karakter'),
});

const useLogin = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(loginSchema) });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', data);
            if (!response.data.data.status) {
                toast.error(response.data.data.pesan);
                return;
            }
            const { pesan, ...userData } = response.data.data;
            setCookie(userData);
            toast.success(pesan);
            navigate('/list-pesanan');
        } catch (error) {
            toast.error('Login gagal, silahkan coba lagi', error);
        }
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};

export default useLogin;
