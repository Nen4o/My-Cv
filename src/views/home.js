import { html, render } from "../data/lib.js";

const homeTemplate = () => html`
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/images/homeImg.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hi there</h5>
        <p class="card-text">My name is Minko Urchev</p>
        <p class="card-text">Junior JavaScript Front-End Developer, Game Developer and future FullStack Developer!!</p>
         <div class="buttons">
    <button type="button" class="btn btn-outline-info"><a class="home-a" href="/about">About me</a></button>
    <button type="button" class="btn btn-outline-success"><a class="home-a" href="/projects">My Projects</a></button>
    </div>
    </div>
    </div>
  </div>
</div>
`
export function renderHome() {
    render(homeTemplate());
}