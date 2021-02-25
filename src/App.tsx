import React, {useEffect, useState} from "react";
// import data from "./episodes.json";
import EpisodeCard from "./components/episode_card";
import Header from "./components/general";
import SearchBar from "./components/search_bar";
import ShowSelector from "./components/show_selector";
import './App.css';
import { IEpisode } from "./components/interface";


function App() {
    let emptyEpisodesArray: IEpisode[] = [];
    const [episodesArray, setEpisodesArray] = useState(emptyEpisodesArray);
    const [searchTerm, setSearchTerm] = useState("");
    const [dropdownSelect, setDropdown] = useState("0");
    const [showSelect, setShowSelect] = useState("")
    
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {setDropdown(e.target.value); setSearchTerm("")};
    const handleShowDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => setShowSelect(e.target.value);


    useEffect(() => {
        async function getEpisodeDataset() {
            const url = "https://api.tvmaze.com/shows/" + showSelect + "/episodes";
            const response = await fetch(url);
            const data = await response.json();
            setEpisodesArray(data)
            console.log(data)
        }
        getEpisodeDataset()
    }, [showSelect])

    

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
            <ShowSelector handleDropdown={handleShowDropdown} showSelected={showSelect}/>
            {showSelect !== "" ? addSearchBar() : <div className="no-show"></div>}
            <div className="all-episodes-flex">
                {showSelect !== "" ? calculateMatchingEpisodes(searchTerm, dropdownSelect).map(props => <EpisodeCard {...props}/>) : <h3>Please select a show</h3>}
            </div>
        </div>
    );
};

export default App;
