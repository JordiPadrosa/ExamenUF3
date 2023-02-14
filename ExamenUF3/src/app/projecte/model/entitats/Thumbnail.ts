export class Thumbnail {
    alt_text: string;
    lqip: string | null;
    height: string;
    width: string;

    constructor(alt_text: string, lqip: string | null, height: string, width: string) {
        this.alt_text = alt_text;
        this.lqip = lqip;
        this.height = height;
        this.width = width;
    }
} 