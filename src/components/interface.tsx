export interface IEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: {
      medium: string | null;
      original: string | null;
    };
    summary: string;
    _links: { self: { href: string } };
};
  

export interface SearchInfo {
    search: string;
    changeActionInput: any;
    changeActionDropdown: any;
    numberResults: number;
    maxResults: number;
    allEpisodes: IEpisode[];
}

