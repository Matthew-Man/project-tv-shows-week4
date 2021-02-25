import "./show_selector.css";
import data from "../shows.json";
// import { ShowsInfo } from "./interface";


export default function ShowSelector(props: {handleDropdown: (e: React.ChangeEvent<HTMLSelectElement>) => void, showSelected: string}) {
    const allShows = data;
    const sortedAllShows = allShows.sort((a, b) => a.name.localeCompare(b.name))
    
    return (
        <div className="showselector-container">
            <select onChange={props.handleDropdown} value={props.showSelected}>
                <option value="" disabled selected>Select a show...</option>
                {sortedAllShows.map((show) => {
                    return <option value={show.id.toString()} key={show.id}>{show.name}</option>
                })}
            </select>
        </div>
    )
}