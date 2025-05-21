import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Card({ title, value, icon, bgColor }) {
    return (
        <div
            // className={'text-base-300 ${bgColor} flex h-64 w-full flex-col justify-between rounded-xl bg-cyan-500 p-8'}
            className={`text-base-300 flex h-64 w-full flex-col justify-between rounded-xl p-8 ${bgColor}`}
        >
            <div className='flex items-center justify-between'>
                <p className='text-lg font-semibold'>{title}</p>
                <div className='text-3xl'>{icon}</div>
            </div>
            <h1 className='text-3xl font-bold'>{value}</h1>
        </div>
    );
}
