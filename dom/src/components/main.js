(() => {
    const playingFieldBox = document.querySelectorAll('.playing-field__box');

    const value = (array) => {
        const element = array[Math.floor(Math.random() * array.length)];
        return element;
    }

    setInterval(() => {
        const item = value(playingFieldBox);

        if (!item.classList.contains('playing-field__image')) {
            playingFieldBox.forEach((element) => {
                element.classList.remove('playing-field__image');
            });

            item.classList.add('playing-field__image');
        }
    }, 1000);
})();
