import { createImgElement } from "./utilities.js";
import zoomImage from "./zoomImage.js";

const loadImages = (imagesCount) => {
  const imgArray = new Array();
  const gallery = document.querySelector(".masonry-gallery");
  const fragment = document.createDocumentFragment();
  const pageName = window.location.pathname
    .replace(/\.[^/.]+$/, "")
    .substring(1);

  for (let i = 0; i < imagesCount; i++) {
    const imgName = `foto (${i + 1})`;
    const imgPath = `assets/img/pages/${pageName}/${imgName}.jpg`;

    imgArray[i] = createImgElement(imgPath, imgName, fragment);
  }

  gallery.appendChild(fragment);

  zoomImage.enable(imgArray);
};

const enable = (imagesCount) => {
  document.addEventListener("DOMContentLoaded", loadImages(imagesCount));
};

export default { enable };
