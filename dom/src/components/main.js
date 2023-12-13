// (() => {
//     setInterval(() => {
        
//     }, 2000);
// })();

const playingFieldBox = document.querySelectorAll('.playing-field__box');

const value = (array) => {
    const element = array[Math.floor(Math.random() * array.length)];
    return element.classList[1];
}

console.log(value(playingFieldBox));
