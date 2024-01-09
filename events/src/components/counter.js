import { arrayCounter } from './constans';
import { arrayBox } from './constans';
import { popup } from './constans';
import { popupHeading } from './constans';
import { popupButton } from './constans';

export function eventListener() {
    arrayBox.forEach(item => {
        item.addEventListener('click', (event) => {
            const element = event.target;

            if (element.classList.contains('playing-field__image')) {
                arrayCounter[0].textContent++;

                if (arrayCounter[0].textContent === '5') {
                    popup.classList.add('popup_opened');
                    popupHeading.textContent = 'Победа';
                }
            } else {
                arrayCounter[1].textContent++;

                if (arrayCounter[1].textContent === '5') {
                    popup.classList.add('popup_opened');
                    popupHeading.textContent = 'Поражение';
                }
            }
        });
    });
}

popupButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
    arrayCounter[0].textContent = 0;
    arrayCounter[1].textContent = 0;
});
