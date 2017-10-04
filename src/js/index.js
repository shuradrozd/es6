import MovieList from './components/movie-list';
import movieService from "./movie-service";
const input = document.querySelector('.search-input');
const movieList = document.querySelector('.movies');
input.addEventListener('input', e => {
    const searchText = e.target.value;

    movieService.getVideoByText(searchText)
        .then(result => {
           const list = new MovieList(result);
            list.drawToDom(movieList);
        });

});