import { concat } from "./concat";
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concat(input.value, 'hello');
    });
}
//# sourceMappingURL=index.js.map