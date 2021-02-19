import { SearchInfo } from "./interface";
import "./search_bar.css";


export default function SearchBar(props: SearchInfo): JSX.Element {
    const { search, changeActionInput, changeActionDropdown, numberResults, maxResults, allEpisodes } = props
    const showResultNumber = (): string => (numberResults === maxResults) ? `Showing all ${maxResults} episodes` : `Displaying ${numberResults}/${maxResults} episode`


    function padEpisodeCode(unpadded: number): string {
        return unpadded < 10 ? `0${unpadded}` : unpadded.toString();
    }


    return (
        <div className="searchbar-container">
            <select onChange={changeActionDropdown}>
                <option value="0">Show all episodes...</option>
                {allEpisodes.map((episode) => <option value={episode.id}>S{padEpisodeCode(episode.season)}E{padEpisodeCode(episode.number)} - {episode.name}</option>)}
            </select>
            <input type="text" value={search} onChange={changeActionInput} placeholder="Type here to search..."/>
            <label className="result-info">{showResultNumber()}</label>
        </div>
    )
}