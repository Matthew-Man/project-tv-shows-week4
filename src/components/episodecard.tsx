import IEpisode from "./interface";

export default function EpisodeCard(props : IEpisode) {
    const {id, url, name, season, number, type, airdate, airtime, airstamp, runtime, image, summary, _links} = props;
    return (
        <div className="episode-card">
            <h1>{name}</h1>
        </div>
    )
}