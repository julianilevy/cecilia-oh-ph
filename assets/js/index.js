import navMenu from "./navMenu.js";
import imageLoader from "./imageLoader.js";

navMenu.enable();

switch (window.location.pathname) {
  case "/":
  case "/contact.html":
    break;
  case "/artistico-por-que.html":
    imageLoader.enable(6);
    break;
  case "/artistico-vivir.html":
    imageLoader.enable(4);
    break;
  case "/filtro.html":
    imageLoader.enable(4);
    break;
  case "/macro.html":
    imageLoader.enable(5);
    break;
  case "/productos.html":
    imageLoader.enable(11);
    break;
  case "/retratos.html":
    imageLoader.enable(16);
    break;
  case "/surrealista.html":
    imageLoader.enable(6);
    break;
}
