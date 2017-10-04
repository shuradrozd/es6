export function movie(data) {
    const html = `
    <article class="movie">
        <h2>${data.title}</h2>
        <!--<date>${data.date}</date>-->
        <div>${data.country}</div>
        <div>${data.imgSrc}</div>
        <div>${data.homepageUrl}</div>
        <div>${data.language}</div>
        <div>${data.numberOfEpisodes}</div>
        <div>${data.number_of_seasons}</div>
        <div>${data.overview}</div>
        <div>${data.popularity}</div>
</article> 
    `;
    return html;
}