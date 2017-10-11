import MovieList from './components/movie-list';
import movieService from "./movie-service";
const input = document.querySelector('.search-input');
const movieList = document.querySelector('.movies');
const list = new MovieList();
const filters = document.querySelector('.filters');
input.addEventListener('input', e => {
    const searchText = e.target.value;
    if (!searchText) {
        list.clearList(movieList);
        return;
    }
    movieService.getVideoByText(searchText)
        .then(data => {
            list.init(data);
            list.renderMovies(data.results);
            list.drawToDom(movieList);
        });

    });
filters.addEventListener('click', (e) =>{
    e.preventDefault();
    const dataAttr = e.target.getAttribute('data-filter');
    if (!dataAttr) {
        return;
    }
    list.sort(dataAttr);
    list.drawToDom(movieList);
})