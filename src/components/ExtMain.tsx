import { useState } from "react"
import ExtTopBar from "./ExtTopBar";

export type ExtFilterOptions = "All" | "Active" | "Inactive";

export default function ExtMain() {
    const [viewFilter, setViewFilter] = useState<ExtFilterOptions>("All");
    return <main>
        <ExtTopBar filter={viewFilter} onSelectFilter={f => setViewFilter(f)} />
    </main>
}