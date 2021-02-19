import { IEpisode } from "./interface";
import "./episode_card.css";


//Need to build correct season and episode code with zeros included if S or E is < 10 - e.g. "S08E01"
//User regex instead of substring and slicing as there are randomly placed tags

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
    );
};


function EpisodeCard(props : IEpisode) {
    const {name, season, number, image, summary} = props;
    const imageAltDesc = name;

    const filtedUnwantedTags = (unfiltered: string): string => unfiltered.replace(/(<([^>]+)>)/ig, "");
    
    function padEpisodeCode(unpadded: number): string {
        return unpadded < 10 ? `0${unpadded}` : unpadded.toString();
    }


    return (
        <div className="episode-card">
            <div className="title-container">
                <span className="title">{name}</span><br/>
                <span className="episode-code">S{padEpisodeCode(season)}E{padEpisodeCode(number)}</span>
            </div>
            <div className="image-container">
                <img src={image.medium} alt={imageAltDesc}/>
            </div>
            <div className="text-continer">
                <p>{filtedUnwantedTags(summary)}</p>
            </div>
        </div>
    );
};


export default createEpisodeCard;