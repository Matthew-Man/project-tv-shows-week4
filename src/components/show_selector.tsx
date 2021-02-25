import "./show_selector.css";
import data from "../shows.json";
// import { ShowsInfo } from "./interface";


export default function ShowSelector(props: {handleDropdown: (e: React.ChangeEvent<HTMLSelectElement>) => void, showSelected: string}) {
    const allShows = data;
    
    return (
        <div className="showselector-container">
            <select onChange={props.handleDropdown} value={props.showSelected}>
                {allShows.map((show) => {
                    return <option value={show.id.toString()} key={show.id}>{show.name}</option>
                })}
            </select>
        </div>
    )
}