import clsx from 'clsx';

export default function Modal({ modalId, children }) {
    return (
        <>
            <input type='checkbox' id={modalId} className='modal-toggle' />
            <div className='modal' role='dialog'>
                <div className='modal-box'>{children}</div>
                <label className='modal-backdrop' htmlFor={modalId}>
                    Close
                </label>
            </div>
        </>
    );
}

function ModalHeader({ children }) {
    return <h2 className='text-lg font-bold'>{children}</h2>;
}

function ModalBody({ children }) {
    return <div className='space-y-2'>{children}</div>;
}

function ModalTrigger({ htmlFor, children, btnState = 'btn-primary', className }) {
    return (
        <label role='button' htmlFor={htmlFor} className={clsx('btn', className, btnState)}>
            {children}
        </label>
    );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Trigger = ModalTrigger;
