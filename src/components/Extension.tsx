import { Extension as ExtType } from "../data/extensionsSlice"

type ExtensionProps = {
    extension: ExtType,
    onToggle: () => void,
    onRemove: () => void
}

export default function Extension({ extension, onToggle, onRemove }: ExtensionProps) {
    return <section className="extension-panel bordered">
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
                onClick={onRemove}>
                Remove
            </button>
            <button
                className="extension-panel__toggle-button"
                data-active={extension.isActive}
                onClick={onToggle}>

            </button>
        </div>
    </section>
}