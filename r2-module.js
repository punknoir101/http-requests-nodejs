const r2 = require('r2');
const url = 'https://jsonplaceholder.typicode.com/posts/1';

const getData = async url => {
    try {
        const response = await r2(url).json;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
};

getData(url);
