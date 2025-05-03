import clsx from 'clsx';
import React from 'react';

export default function Badge({ state, children }) {
    return <div className={clsx('badge w-full', state)}>{children}</div>;
}
