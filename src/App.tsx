import React, {useEffect, useState} from "react";
import data from "./episodes.json";
import createEpisodeCard from "./components/episode_card";
import Header from "./components/general";
import SearchBar from "./components/search_bar";
import './App.css';
import { IEpisode } from "./components/interface";


function App() {
    let emptyEpisodesArray: IEpisode[] = [];
    const [episodesArray, setEpisodesArray] = useState(emptyEpisodesArray);
    const [searchTerm, setSearchTerm] = useState("");
    const [dropdownSelect, setDropdown] = useState("0");
    
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {setDropdown(e.target.value); setSearchTerm("")};
    
    
    async function getDataset() {
        const url = "https://api.tvmaze.com/shows/83/episodes";
        const response = await fetch(url);
        const data = await response.json();
        setEpisodesArray(data) // constantly fetching and updating state
        console.log(data)
    }
    
    useEffect(() => {getDataset()}, []);


    function isSearchResult(episode: IEpisode, term: string): boolean {
        const isNameIncluded = episode.name.toLowerCase().includes(term);
        const isSummaryIncluded = episode.summary.toLowerCase().includes(term);
        return isNameIncluded || isSummaryIncluded;
    };

    
    function isDropdownResult(episode: IEpisode, dropdown: string): boolean {
        return episode.id.toString().includes(dropdown)
    };


    function calculateMatchingEpisodes(term: string, dropdown: string): IEpisode[] {
        if (term === "" && dropdownSelect === "0") {
            return episodesArray;
        } else if (dropdownSelect !== "0") {
            return episodesArray.filter((episode) => isDropdownResult(episode, dropdown))
        } else {
            return episodesArray.filter((episode) => isSearchResult(episode, term.toLowerCase()));
        };
    };


    function addSearchBar() {
        return (
            <SearchBar 
                search={searchTerm}
                changeActionInput={handleSearchChange}
                changeActionDropdown={handleDropdownChange}
                numberResults={calculateMatchingEpisodes(searchTerm, dropdownSelect).length} 
                maxResults={episodesArray.length}
                allEpisodes={episodesArray}
            />
        );
    };


    return (
        <div className="main-container">
            <Header />
            {addSearchBar()}
            <div className="all-episodes-flex">
                {calculateMatchingEpisodes(searchTerm, dropdownSelect).map(createEpisodeCard)}
            </div>
        </div>
    );
};

export default App;
