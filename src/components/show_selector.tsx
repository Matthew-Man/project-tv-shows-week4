import "./show_selector.css";
import data from "../shows.json";
// import { ShowsInfo } from "./interface";


export default function ShowSelector(handleDropdown: (e: React.ChangeEvent<HTMLSelectElement>) => void) {
    const allShows = data;
    console.log(allShows)
    return (
        <div className="showselector-container">
            <select onChange={handleDropdown}>
                <option value="0">Select a show...</option>
                {allShows.map((show) => {
                    <option value={show.id} key={show.id}>{show.name}</option>
                })}
            </select>
        </div>
    )
}