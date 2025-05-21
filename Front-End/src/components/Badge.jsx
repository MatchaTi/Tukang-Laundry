import clsx from 'clsx';

export default function Badge({ state, children }) {
    return <div className={clsx('badge h-fit w-full', state)}>{children}</div>;
}
