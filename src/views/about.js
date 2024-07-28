import { html, render } from "../data/lib.js";

const aboutTemplate = () => html`
<div class="p-3 mb-2 bg-dark">
<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
<nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
  <a class="navbar-brand">About me</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">Who am i?</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">My education</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">More</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1">Who am i?</h4>
  <p>My name is Minko Urchev, 17-years old from Troyan-Bulgaria.
   I do programming since 2022, with main goal to make my own video game.
   1 year later (July 2023) i made "ReflecsabelExabel"
  and post it in Google Play! It\`s not very popular game but the idea here is will i create it without any help(except Google)!</p>
  <h4 id="scrollspyHeading2">My education</h4>
  <p>I learn in the only school for mountain guides in Bulgaria: <a class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" target="_blank"href="https://www.facebook.com/profile.php?id=100057736086757">"National school for mountain guides - Cherni Osam".</a>
  I still don\`t have secondary education because i\`m 12-th grade, but that does\`t stop me to learn new things every day! One of this thing is programming. 
  I started the free course "Programming Basic with JavaScript" from <a class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" target="_blank"href="https://softuni.bg">SoftUni</a>,
   and from then i finished almost 7 courses for: Web development, Game development, QA testing and Ethical hacking and cyber security. 
   After each course there is a exam, and if you get it SoftUni gives you certificate, to prove that you know the material from the course.
    You can see my certificates from here :).</p>
  <h4 id="scrollspyHeading3">My further?</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div>
</div>
`

export function renderAbout() {
    render(aboutTemplate());
}