import { SearchInfo } from "./interface";
import "./search_bar.css";

export default function SearchBar(props: SearchInfo) {
    const { search, changeAction } = props
    return (
        <div className="searchbar-container">
            <input type="text" value={search} onChange={changeAction} placeholder="Type here to search..."/>
        </div>
    )
}