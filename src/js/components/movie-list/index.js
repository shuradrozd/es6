import Movie from '../movie';

export default class MovieList {
    constructor(data) {
        this.data = data;

        //debugger
        this.renderMovies();
    }

    renderMovies() {
        this.fragment = document.createDocumentFragment();

        this.data.results.forEach((data) => {
            this.article = document.createElement('article');
            this.article.classList.add('movie');
            this.article.innerHTML = Movie.movie(data); //.title;

            this.fragment.appendChild(this.article);
        });
    }
    drawToDom(selector) {
        this.clearList(selector);
        selector.appendChild(this.fragment);

    }
    clearList(selector) {
        selector.innerHTML = '';
    }
}