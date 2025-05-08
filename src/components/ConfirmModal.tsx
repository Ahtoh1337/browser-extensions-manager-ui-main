import ReactFocusLock from "react-focus-lock";

type ConfirmModalProps = {
    children: any,
    onConfirm: () => void,
    onClose: () => void
}

export default function ConfirmModal({ children, onConfirm, onClose }: ConfirmModalProps) {
    return <ReactFocusLock>
        <div className="confirm-modal">
            <section className="confirm-modal__content bordered">
                <p>
                    {children}
                </p>
                <div className="confirm-modal__button-list">
                    <button className="confirm-modal__button bordered"
                        onClick={onClose}>
                        No
                    </button>
                    <button className="confirm-modal__button bordered"
                        onClick={() => {
                            onClose();
                            onConfirm();
                        }}>
                        Yes
                    </button>
                </div>
            </section>
        </div>
    </ReactFocusLock>
}