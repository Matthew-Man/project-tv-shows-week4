import React from "react";
import data from "./episodes.json";
import EpisodeCard from "./components/episodecard"
import IEpisode from "./components/interface";


function createEpisodeCard(props: IEpisode) {
    return(
        <EpisodeCard 
            id={props.id}
            url={props.url}
            name={props.name}
            season={props.season}
            number={props.number}
            type={props.type}
            airdate={props.airdate}
            airtime={props.airtime}
            airstamp={props.airstamp}
            runtime={props.runtime}
            image={props.image}
            summary={props.summary}
            _links={props._links}
        />
    )
}


function App() {
    const episodesArray = data;
    const singleTestEpisode = episodesArray[0];
    console.log(singleTestEpisode);
    console.log((singleTestEpisode.id))


    return (
        <div>
            {createEpisodeCard(singleTestEpisode)}
        </div>
    );
}

export default App;
