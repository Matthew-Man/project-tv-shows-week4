import IEpisode from "./interface";
import "./episode_card.css"

export default function EpisodeCard(props : IEpisode) {
    const {id, url, name, season, number, type, airdate, airtime, airstamp, runtime, image, summary, _links} = props;
    return (
        <div className="episode-card">
            <div className="title-container">
                <h2>{name} - S{season}E{number}</h2>
            </div>
            <div className="image-container">
                <img src={image.original} alt="Episode image cover"/>
            </div>
            <div className="text-continer">
                {summary.substring(3).slice(0,-4)}
            </div>
        </div>
    )
}