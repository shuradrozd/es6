function httpGet(url) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.open('GET', url);
        xhttp.send();

        xhttp.addEventListener('readystatechange', () => {
            if (xhttp.readyState !== 4) {
                return;
            }
            if (xhttp.status !== 200) {
                throw new Error('Bat status');
            }


            resolve(xhttp.responseText);

        });
    });
}
export default httpGet;