import { ExtFilterOptions } from "./ExtMain"

type ExtTopBarProps = {
    filter: ExtFilterOptions,
    onSelectFilter: (newFilter: ExtFilterOptions) => void
}

export default function ExtTopBar({ filter, onSelectFilter }: ExtTopBarProps) {
    const handleFilterButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const filterOption: ExtFilterOptions = e.currentTarget.getAttribute("data-filter") as ExtFilterOptions;
        onSelectFilter(filterOption);
    }
    return <div>
        <h1>Extensions List</h1>
        {["All", "Active", "Inactive"].map(o => <button
            key={o}
            data-filter={o}
            data-active={o === filter}
            onClick={handleFilterButtonClick}
            className="ext-top-bar__filter-button">
            {o}
        </button>)}
    </div>
}