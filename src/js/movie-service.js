import config from './config';

function getVideoByText(text) {
    if (!text) {
        return;
    }
    return fetch(config.searchMovieURL + text)
        .then(r => r.json());
}

function getVideoById(id) {
    const url = `${config.baseMovieUrl}${config.queryMovieById}${id}${config.api_key}`;
    return fetch(url)
        .then(r => r.json());
}

export default {
    getVideoByText,
    getVideoById
}