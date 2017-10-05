import config from './config';

function getVideoByText(text) {
    if (!text) {
        return;
    }
    return fetch(config.searchMovieURL + text)
        .then(r => r.json());
}

export default {
    getVideoByText
}