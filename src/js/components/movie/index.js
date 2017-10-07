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
    return {
        title: data.title || data.name || 'Unknown',
        date: data.first_air_date,
        country:data.origin_country,
        img: getPictureUrl(data),
        homepageUrl: data.homepageUrl,
        language: data.original_language,
        numberOfEpisodes: data.numberOfEpisodes,
        number_of_seasons:data.number_of_seasons,
        overview: data.overview,
        popularity: data.popularity,
        id: data.id
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