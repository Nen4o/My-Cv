import page from 'https://unpkg.com/page@1.11.6/page.mjs';
import { html, render as baseRender } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

const rootElement = document.querySelector('main');

function render(template, element = rootElement) {
    baseRender(template, element);
}

export {
    page,
    render,
    html
}
