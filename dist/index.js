"use strict";
let temperature = 25;
let isHot = temperature > 35;
let hotday = document.querySelector('.hot');
if (hotday) {
    hotday.innerHTML = isHot ? 'It\'s a hot day!' : 'It\'s not too hot today.';
}
else {
    console.error('Element with class "boolean" not found.');
}
//# sourceMappingURL=index.js.map