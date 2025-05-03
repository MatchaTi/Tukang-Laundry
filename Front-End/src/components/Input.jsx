import { Icon } from '@iconify/react';

export default function Input({ label, icon, type = 'text', placeholder, className, ...props }) {
    return (
        <fieldset className='fieldset w-full'>
            <legend className='fieldset-legend'>{label ? label : 'Text'}</legend>
            <label className='input w-full'>
                <Icon icon={icon} />
                <input className={`w-full ${className}`} type={type} placeholder={placeholder} {...props} />
            </label>
        </fieldset>
    );
}
