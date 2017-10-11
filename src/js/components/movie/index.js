import config from '../../config';

function movie(data) {
    const mappingData = mapData(data);
    const html = `
    <article class="movie">
        <h2 class='movie-title'>${mappingData.title}</h2>
       <date class='date'>${mappingData.date}</date>
        <div class='country'>${mappingData.country}</div>
        <div class="picture"><img src='${mappingData.img}'/></div>
        <div class='language'>${mappingData.language}</div>
        <div class='overview'>${mappingData.overview}</div>
        <div class='popularity'>${mappingData.popularity}</div>
    </article> 
    `;
    return html;
}

export default {
    movie
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
        numberOfEpisodes: data.numberOfEpisodes || defaultValue,
        number_of_seasons:data.number_of_seasons || defaultValue,
        overview: data.overview || defaultValue,
        popularity: data.popularity || defaultValue,
        id: data.id || Date.now()
    }
}

function getPictureUrl(data) {
    const url = data.backdrop_path || data.poster_path;
    if (url) {
        return config.imageSrc + url;
    } else {
        return config.noImgSrc;
    }
}