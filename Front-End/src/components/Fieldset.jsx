import clsx from 'clsx';

export default function Fieldset({ children, className }) {
    return <fieldset className={clsx('fieldset w-full', className)}>{children}</fieldset>;
}

function FieldsetLegend({ children }) {
    return <legend className='fieldset-legend'>{children}</legend>;
}

function FieldsetLabel({ children }) {
    return <label className='input flex w-full items-center justify-between pr-0'>{children}</label>;
}

function FieldsetBody({ children, className }) {
    return <div className={clsx('fieldset-body', className)}>{children}</div>;
}

Fieldset.Legend = FieldsetLegend;
Fieldset.Label = FieldsetLabel;
Fieldset.Body = FieldsetBody;
