import config from '../../config';

function movie(data) {
    const mappingData = mapData(data);
    const html = `
    <article class="movie">
        <h2>${mappingData.title}</h2>
       <date>${mappingData.first_air_date}</date>
        <div>${mappingData.origin_country}</div>
        <div class="picture"><img src='${mappingData.img}'/></div>
        <div>${mappingData.language}</div>
        <div>${mappingData.numberOfEpisodes}</div>
        <div>${mappingData.number_of_seasons}</div>
        <div>${mappingData.overview}</div>
        <div>${mappingData.popularity}</div>
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
        date: data.date,
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