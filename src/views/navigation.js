import { render, html } from "../data/lib.js";

const header = document.querySelector('header');

const navigationTemplate = () => html`
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">MinqoDev</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            <a class="nav-link" href="/about">About me</a>
                            <a class="nav-link" href="/projects">My projects</a>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
`

export function renderNavigation(ctx, next) {
    render(navigationTemplate(), header);
    next();
}