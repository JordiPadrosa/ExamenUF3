import { Thumbnail } from "./Thumbnail";

export class Quadra {
    id: string;
    title: string;
    thumbnail: Thumbnail;
    artist_id: string;

    constructor(id: string, title: string, thumbnail: Thumbnail, artist_id: string) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.artist_id = artist_id;
    }
} 