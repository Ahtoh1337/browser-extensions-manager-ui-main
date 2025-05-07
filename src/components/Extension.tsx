import { Extension as ExtType } from "../data/extensionsSlice"

type ExtensionProps = {
    extension: ExtType,
    onToggle: () => void,
    onRemove: () => void
}

export default function Extension({ extension, onToggle, onRemove }: ExtensionProps) {
    return <section>
        <div>
            <img src={extension.logo} alt={extension.name} />
            <h3>{extension.name}</h3>
            <p>{extension.description}</p>
        </div>
        <div>
            <button onClick={onRemove}>Remove</button>
            <button onClick={onToggle}>{extension.isActive ? "Disable" : "Enable"}</button>
        </div>
    </section>
}