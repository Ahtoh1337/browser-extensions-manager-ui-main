import { useState } from "react"
import ExtList from "./ExtList";
import ExtTopBar from "./ExtTopBar";

export type ExtFilterOptions = "All" | "Active" | "Inactive";

export default function ExtMain() {
    const [viewFilter, setViewFilter] = useState<ExtFilterOptions>("All");
    return <main>
        <ExtTopBar filter={viewFilter} onSelectFilter={f => setViewFilter(f)} />
        <ExtList filter={viewFilter} />
    </main>
}