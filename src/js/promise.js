import httpGet from './getData';
httpGet('test.html')
    .then((text) => console.log(text))
    .catch(() => console.log('Bad'));


httpGet('testnew.html')
    .then((text) => console.log(text))
    .catch(() => console.log('Bad'));