export class Pagina {
    current_page: string;
    total_pages: string;

    constructor(current_page: string, total_pages: string) {
        this.current_page = current_page;
        this.total_pages = total_pages;
    }
} 