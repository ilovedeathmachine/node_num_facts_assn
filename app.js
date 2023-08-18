let favNum = 19;
let baseURL = "http://numbersapi.com";

async function numTrivia() {
    let data = await $.getJSON(`${baseURL}/${favNum}?json`);
    console.log(data);
}
numTrivia();

const favNums = [19, 29];
async function multNumTrivia() {
    let data = await Promise.all(
        favNums.map(num => $.getJSON(`${baseURL}/${num}?json`))
    );
    console.log(data);
}
multNumTrivia();

async function appenedTrivia() {
    let facts = await Promise.all(
        Array.from({length: 4}, () => $.getJSON(`${baseURL}/${favNum}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}

appenedTrivia();