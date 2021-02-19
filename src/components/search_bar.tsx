import { SearchInfo } from "./interface";
import "./search_bar.css";


export default function SearchBar(props: SearchInfo) {
    const { search, changeAction, numberResults, maxResults } = props
    const showResultNumber = (): string => (numberResults === maxResults) ? `Showing all ${maxResults} episodes` : `Displaying ${numberResults}/${maxResults} episode`

    return (
        <div className="searchbar-container">
            <input type="text" value={search} onChange={changeAction} placeholder="Type here to search..."/>
            <label className="result-info">{showResultNumber()}</label>
        </div>
    )
}