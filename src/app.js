import { page } from "./data/lib.js";
import { renderAbout } from "./views/about.js";
import { renderHome } from "./views/home.js";
import { renderNavigation } from "./views/navigation.js";

page(renderNavigation);

page('/', renderHome);
page('/about', renderAbout)

page.start();