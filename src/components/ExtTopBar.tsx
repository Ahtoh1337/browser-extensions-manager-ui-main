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
    return <div className="ext-top-bar">
        <h1 className="ext-top-bar__heading">Extensions List</h1>
        <div className="ext-top-bar__button-list">
            {["All", "Active", "Inactive"].map(o => <button
                key={o}
                data-filter={o}
                data-active={o === filter}
                onClick={handleFilterButtonClick}
                className="ext-top-bar__filter-button bordered">
                {o}
            </button>)}
        </div>
    </div>
}