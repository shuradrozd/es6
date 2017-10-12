import MovieList from './components/movie-list';
import movieService from "./movie-service";
import movieCard from './components/movie-card';
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
movieList.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.closest('.movie-link');
    let id;
    e.preventDefault();
    if (!link) {
        return;
    }
    id = link.getAttribute('href');
    movieService.getVideoById(id)
        .then((data) =>{
            movieCard.movieRender(data);
        });
});