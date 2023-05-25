const getQuoteButton = document.querySelector('.get-quote');
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');
const errorText = document.querySelector('.error');
const API_URL = `https://dummyjson.com/quotes/random`;

getQuoteButton.addEventListener('click', () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            quoteText.innerHTML = '"' + data.quote + '"';
            authorText.innerHTML = '(' + data.author + ')';
            errorText.innerHTML = '';
        })
        .catch((error) => {
            quoteText.innerHTML = '';
            authorText.innerHTML = '';
            errorText.innerHTML = `Error getting quote: ${error.message}`
        });
});