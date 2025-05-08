import { useState } from "react"
import { Extension as ExtType } from "../data/extensionsSlice"
import { createPortal } from "react-dom";
import ConfirmModal from "./ConfirmModal";

type ExtensionProps = {
    extension: ExtType,
    onToggle: () => void,
    onRemove: () => void
}

export default function Extension({ extension, onToggle, onRemove }: ExtensionProps) {
    const [showModal, setShowModal] = useState(false);

    return <>
        <section className="extension-panel bordered">
            <div className="extension-panel__info-container">
                <img src={extension.logo} alt={extension.name} />
                <div>
                    <h3>{extension.name}</h3>
                    <p>{extension.description}</p>
                </div>
            </div>
            <div className="extension-panel__button-list">
                <button
                    className="extension-panel__remove-button bordered"
                    onClick={() => setShowModal(true)}>
                    Remove
                </button>
                <button
                    className="extension-panel__toggle-button"
                    data-active={extension.isActive}
                    onClick={onToggle}>

                </button>
            </div>
        </section>
        {showModal && createPortal(<ConfirmModal
            onConfirm={() => onRemove()}
            onClose={() => setShowModal(false)}>
            Remove <b>{extension.name}</b> from browser extensions?
        </ConfirmModal>, document.body)}
    </>
}