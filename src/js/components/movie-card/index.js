import config from '../../config';
const listWrapper = document.querySelector('.list-wrapper');
const movieWrapper = document.querySelector('.movie-wrapper');

function movieRender(data) {
    const mappingData = mapData(data);
    const html = `
        <a class='back'>Back</a>
        <a href='${data.id}' class='movie-link'>    
        <h2 class='movie-title'>${mappingData.title}</h2>
       <date class='date'>${mappingData.date}</date>
        <div class='country'>${mappingData.country}</div>
        <div class="picture"><img src='${mappingData.img}'/></div>
        <div class='language'>${mappingData.language}</div>
        <div class='popularity'>${mappingData.episodesCount}</div>
        <div class='popularity'>${mappingData.seasonsCount}</div>
        <div class='overview'>${mappingData.overview}</div>
        <div class='popularity'>${mappingData.popularity}</div>
        <div class='popularity'>${mappingData.homeUrl}</div>
        </a>
    `;
    render(html);
}


function mapData(data) {
    const defaultValue = 'Unknown';
    return {

        title: data.title || data.name || defaultValue,
        date: data.release_date || data.first_air_date|| defaultValue,
        country:data.origin_country || defaultValue,
        img: getPictureUrl(data),
        homepageUrl: data.homepageUrl || defaultValue,
        language: data.original_language || defaultValue,
        episodesCount: data.numberOfEpisodes || defaultValue,
        seasonsCount:data.number_of_seasons || defaultValue,
        overview: data.overview || defaultValue,
        popularity: data.popularity || defaultValue,
        homeUrl: data.homepage,
        id: data.id || Date.now()
    }
}

function getPictureUrl(data) {
    const url = data.backdrop_path || data.poster_path;;

    if (url) {
        return config.imageSrc + url;
    } else {
        return config.noImgSrc;
    }
}

function render(html) {
    const elem = document.createElement('article');

    elem.classList.add('movie');
    elem.innerHTML = html;
    movieWrapper.innerHTML = '';
    listWrapper.style.display = 'none';
    movieWrapper.style.display ='block';
    movieWrapper.appendChild(elem);
    const backButton = document.querySelector('.back');
    backButton.addEventListener('click', back);
}

function back() {
    listWrapper.style.display ='block';
    movieWrapper.style.display ='none';
}

export default {
    movieRender,
    back
}
