import React, {useState} from "react";
import data from "./episodes.json";
import createEpisodeCard from "./components/episode_card";
import Header from "./components/general";
import SearchBar from "./components/search_bar";
import './App.css';
import { IEpisode } from "./components/interface";


function App() {
    const episodesArray = data;
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value.toLowerCase());


    function isSearchResult(episode: IEpisode, term: string): boolean {
        const isNameIncluded = episode.name.toLowerCase().includes(term);
        const isSummaryIncluded = episode.summary.toLowerCase().includes(term);
        return isNameIncluded || isSummaryIncluded;
    };


    function calculateMatchingEpisodes(term: string): IEpisode[] {
        if (term === "") {
            return episodesArray;
        } else {
            return episodesArray.filter((episode) => isSearchResult(episode, term));
        };
    };

    console.log(calculateMatchingEpisodes("wint"));

    return (
        <div className="main-container">
            <Header />
            <SearchBar search={searchTerm} changeAction={handleSearchChange}/>
            <div className="all-episodes-flex">
                {calculateMatchingEpisodes(searchTerm).map(createEpisodeCard)}
            </div>
        </div>
    );
};

export default App;
