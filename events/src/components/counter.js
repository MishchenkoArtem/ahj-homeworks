import { arrayCounter } from './constans';
import { arrayBox } from './constans';

export function eventListener() {
    arrayBox.forEach(item => {
        item.addEventListener('click', (event) => {
            const element = event.target;

            if (element.classList.contains('playing-field__image')) {
                arrayCounter[0].textContent++;

                if (arrayCounter[0].textContent === '5') {
                    alert('victory');
                }
            } else {
                arrayCounter[1].textContent++;

                if (arrayCounter[1].textContent === '5') {
                    alert('defeat');
                }
            }
        });
    });
}
