import MovieList from './components/movie-list';
import movieService from "./movie-service";
const input = document.querySelector('.search-input');
const movieList = document.querySelector('.movies');
const list = new MovieList();
input.addEventListener('input', e => {
    const searchText = e.target.value;
    if (!searchText) {
        list.clearList(movieList);
        return;
    }
    movieService.getVideoByText(searchText)
        .then(result => {
            list.renderMovies(result);
            list.drawToDom(movieList);
        });

    });