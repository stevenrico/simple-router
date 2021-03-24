import { Router } from "./router";

const app = document.querySelector("#app");

function renderHome() {
  app.innerHTML = `
      <nav>
        <ol>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
        </ol>
      </nav>
      <h1>Home</h1>
    `;
}

function renderAbout() {
  app.innerHTML = `
      <nav>
        <ol>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
        </ol>
      </nav>
      <h1>About</h1>
    `;
}

function main() {
  window.addEventListener("popstate", () => Router.renderRoute());

  const routes = [
    { url: "", render: renderHome },
    { url: "about", render: renderAbout }
  ];

  Router.setRoutes(routes);

  Router.renderRoute();
}

main();
