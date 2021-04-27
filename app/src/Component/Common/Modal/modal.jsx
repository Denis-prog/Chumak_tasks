import React from 'react';
import Portal from '../Portal';
import Overlay from '../Overlay';
import Button from '../Button';
import './modalWindow.scss';

const Modal = (props) => {
    const { title, isOpen, onCancel, children } = props;

    return (
        <>
            { isOpen &&
                <Portal>
                    <Overlay>
                        <div className="modal-window">
                            <div className="modal-window__header">
                                <h1 className="modal-window__header-title">{title}</h1>
                                <Button onClick={onCancel} className="modal-window__header-btn" ariaLabel="close">
                                    X
                            </Button>
                            </div>
                            <div className="modal-window__body">
                                {children}
                            </div>   
                        </div>
                    </Overlay>
                </Portal>}
        </>
    );
};

export default Modal;
