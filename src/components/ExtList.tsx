import { useMemo } from "react";
import { remove, toggle } from "../data/extensionsSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import Extension from "./Extension";
import { ExtFilterOptions } from "./ExtMain";

type ExtListProps = {
    filter: ExtFilterOptions
}

export default function ExtList({ filter }: ExtListProps) {
    const extensions = useAppSelector(state => state.extensions);
    const dispatch = useAppDispatch();

    const filtered = useMemo(() => {
        switch (filter) {
            case "Active":
                return extensions.filter(e => e.isActive);
            case "Inactive":
                return extensions.filter(e => !e.isActive);
            default:
                return extensions;
        }
    }, [filter, extensions])

    return <div>
        {filtered.map(ext => <Extension
            key={ext.name}
            extension={ext}
            onToggle={() => dispatch(toggle(ext.name))}
            onRemove={() => dispatch(remove(ext.name))} />)}
    </div>
}