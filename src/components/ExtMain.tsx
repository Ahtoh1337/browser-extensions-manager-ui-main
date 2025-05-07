import { useState } from "react"
import ExtList from "./ExtList";
import ExtTopBar from "./ExtTopBar";
import Attribution from "./Attribution";

export type ExtFilterOptions = "All" | "Active" | "Inactive";

export default function ExtMain() {
    const [viewFilter, setViewFilter] = useState<ExtFilterOptions>("All");
    return <main>
        <ExtTopBar filter={viewFilter} onSelectFilter={f => setViewFilter(f)} />
        <ExtList filter={viewFilter} />
        <Attribution />
    </main>
}