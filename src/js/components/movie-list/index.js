import Movie from '../movie';

export default class MovieList {
    // constructor(data) {
    //     this.data = data;
    //
    //     //debugger
    //     this.renderMovies();
    // }
    init(data) {
        this.data = data;
    }

    renderMovies(data) {
        //this.data = data;
        this.fragment = document.createDocumentFragment();

        data.forEach((data) => {
            this.article = document.createElement('article');
            this.article.classList.add('movie');
            this.article.innerHTML = Movie.movie(data); //.title;

            this.fragment.appendChild(this.article);
        });
    }
    drawToDom(selector) {
        this.selector = selector;
        this.clearList(selector);
        selector.appendChild(this.fragment);

    }
    clearList(selector) {
        selector.innerHTML = '';
    }
    sortByMaxRating(data) {
        data.sort((a,b) => {
            return b.popularity - a.popularity;
        });
        this.renderMovies(data);
    }
    sortByMinRating(data) {
        data.sort((a,b) => {
            return a.popularity - b.popularity;
        });
        this.renderMovies(data);
    }
    sortByDateNew(data) {
        data.sort((a,b) => {
            return new Date(b.release_date) - new Date(a.release_date);
        });
        this.renderMovies(data);
    }
    sortByDateOld(data) {
        data.sort((a,b) => {
            return new Date(a.release_date) - new Date(b.release_date);
        });
        this.renderMovies(data);
    }
    sort(filter) {
        const data = [...this.data.results];
        if (filter === 'ratingMax') {
            this.sortByMaxRating(data);
        }
        if (filter === 'ratingMin') {
            this.sortByMinRating(data);
        }
        if (filter === 'dateNew') {
            this.sortByDateNew(data);
        }
        if (filter === 'dateOld') {
            this.sortByDateOld(data);
        }

    }
    hide() {
        this.selector.style.display = 'none';
    }
}