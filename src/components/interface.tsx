import { ReactHTML } from "react";
import { StringLiteralLike } from "typescript";

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
    } | null;
    summary: string;
    _links: { self: { href: string } };
};
  

export interface SearchInfo {
    search: string;
    changeActionInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeActionDropdown: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    numberResults: number;
    maxResults: number;
    allEpisodes: IEpisode[];
}


export interface ShowsInfo {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: {
        time: string;
        days: string[];
    };
    rating: {
        average: number;
    };
    weight: number;
    network: {
        id: number; 
        name: string;
        country: {
            name: string;
            code: string;
            timezone: string;
        }
    };
    webChannel: {
        id: number;
        name: string;
        country: {
            name: string;
            code: string;
            timezone: string;
        }
    };
    externals: {
        tvrage: number;
        thetvdb: number;
        imdb: string;
    };
    image: {
        medium:string;
        original: string
    };
    summary: string;
    updated: number;
    _links: {
        self: {
            href:string;
        };
        previousepisode: {
            href:string;
        };
    }
}
