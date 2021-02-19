import React from "react";
import data from "./episodes.json";
import createEpisodeCard from "./components/episode_card"
import './App.css'


function App() {
    const episodesArray = data;
    const singleTestEpisode = episodesArray[0];

    return (
        <div className="all-episodes-flex">
            {/* {createEpisodeCard(singleTestEpisode)} */}
            {React.Children.toArray(episodesArray.map(createEpisodeCard))}
        </div>
    );
}

export default App;
