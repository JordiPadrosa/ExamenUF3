import { Thumbnail } from "./Thumbnail";

export class Quadra {
    id: string;
    title: string;
    thumbnail: Thumbnail;

    constructor(id: string, title: string, thumbnail: Thumbnail) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
    }
} 