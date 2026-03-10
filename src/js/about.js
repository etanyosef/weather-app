import sagit from "../img/sagit.jpg";

export const renderAbout = () => {
    const content = document.getElementById("content");
    const h2 = document.createElement("h2");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    content.textContent = "";
    h2.textContent = "About";
    content.append(h2);

    img.src = sagit;
    figcaption.textContent = "Our chef just wanna cook food.";

    figure.classList.add("our-chef");

    figure.append(img);
    figure.append(figcaption);
    content.append(figure);
};
