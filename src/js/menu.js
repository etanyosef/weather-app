// main dishes image
import chickenTinola from "../img/dishes/chicken-tinola.jpg";
import humba from "../img/dishes/humba.png";
import bulad from "../img/dishes/bulad.png";
import lechonKawali from "../img/dishes/lechon-kawali.png";
import dinuguan from "../img/dishes/dinuguan.png";
// drinks image
import sikwate from "../img/drinks/sikwate.png";
import salabat from "../img/drinks/salabat.png";
// dessert image
import bukoHalo from "../img/dessert/buko-halo.png";
import mangoFloat from "../img/dessert/mango-float.png";

const mainDishesMenu = [
    {
        name: "Chicken Tinola",
        description:
            "Chicken Tinola is a Filipino soup dish. It involves cooking chicken pieces in ginger broth. It is a popular cold weather dish. This Filipino Chicken Soup is best enjoyed with fish sauce as dipping sauce, and a cup of warm white rice.",
        price: "180",
        url: chickenTinola,
    },
    {
        name: "Humba",
        description:
            "Humba is a dish of tender pork, salted black beans, and an assortment of spices. With its deep flavor palate and numerous ingredients, it is the perfect combination of sweet and savory.",
        price: "200",
        url: humba,
    },
    {
        name: "Bulad(Bangus)",
        description:
            "Bulad are dried fish. Fish prepared as bulad are usually split open (though they may be left whole), gutted, salted liberally, and then sun and air-dried.",
        price: "80",
        url: bulad,
    },
    {
        name: "Lechon Kawali",
        description:
            "Lechon kawali is a dish that Filipinos grew up eating and never get tired of. This lechon kawali recipe produces crispy deep fried pork belly with skin that crackles and meat that stays tender and juicy.",
        price: "240",
        url: lechonKawali,
    },
    {
        name: "Pork Dinuguan",
        description:
            "Pork Dinuguan is a bold and savory Filipino stew that’s rich, hearty, and deeply flavorful. Made with pork shoulder, pig’s blood, and green chili, it’s known for its dark, almost chocolaty appearance.",
        price: "200",
        url: dinuguan,
    },
];

const drinksMenu = [
    {
        name: "Sikwate",
        description:
            "Sikwate, or Chocolate de Batirol, is a treasured Filipino hot chocolate tradition crafted from pure cacao. Known as sikwa’te (“sik-wah-teh”) in Visayas and Mindanao (particularly Cebu), and tsokolate de batirol nationwide.",
        price: "80",
        url: sikwate,
    },
    {
        name: "Salabat",
        description:
            "Salabat is a traditional Filipino ginger tea that is known for its relaxing and amazing health benefits. It is commonly made by boiling ginger slices in water, occasionally with a mixture of honey, lemon, or other spices to increase the flavor and therapeutic effects.",
        price: "50",
        url: salabat,
    },
];

const dessertMenu = [
    {
        name: "Buko Halo-Halo",
        description:
            "Buko halo or buko halo-halo is a combination of buko salad and halo-halo desserts, usually served directly on a coconut shell. It differs from halo-halo in the larger amount of coconut used.",
        price: "120",
        url: bukoHalo,
    },
    {
        name: "Mango Float",
        description:
            "Mango float or crema de mangga is a Filipino icebox cake dessert made with layers of graham cracker crust, whipped cream, condensed milk, and ripe carabao mangoes. It is chilled for a few hours before serving.",
        price: "100",
        url: mangoFloat,
    },
];

const menu = document.createElement("div");

export const renderMenu = () => {
    // clear content div
    const content = document.getElementById("content");
    content.textContent = "";
    menu.textContent = "";
    // add page title
    const title = document.createElement("h2");
    title.textContent = "Menu";
    content.append(title);

    renderMainDishes();

    renderDrinks();

    renderDesserts();

    menu.classList.add("menu");
    content.append(menu);
};

const renderMainDishes = () => {
    const mainDishesContainer = document.createElement("section");
    const title = document.createElement("h3");
    const mainDishes = document.createElement("div");

    title.textContent = "Main Dishes";
    mainDishesContainer.append(title);

    mainDishesMenu.forEach((dish) => {
        createCard(dish, mainDishes);
    });

    mainDishes.classList.add("card-container");
    mainDishesContainer.classList.add("main-dishes");

    mainDishesContainer.append(mainDishes);
    menu.append(mainDishesContainer);
};

const renderDrinks = () => {
    const drinksContainer = document.createElement("section");
    const title = document.createElement("h3");
    const drinks = document.createElement("div");

    title.textContent = "Drinks";
    drinksContainer.append(title);

    drinksMenu.forEach((drink) => {
        createCard(drink, drinks);
    });

    drinks.classList.add("card-container");
    drinksContainer.classList.add("drinks");

    drinksContainer.append(drinks);
    menu.append(drinksContainer);
};

const renderDesserts = () => {
    const dessertsContainer = document.createElement("section");
    const title = document.createElement("h3");
    const desserts = document.createElement("div");

    title.textContent = "Desserts";
    dessertsContainer.append(title);

    dessertMenu.forEach((dessert) => {
        createCard(dessert, desserts);
    });

    desserts.classList.add("card-container");
    dessertsContainer.classList.add("desserts");

    dessertsContainer.append(desserts);
    menu.append(dessertsContainer);
};

const createCard = (submenu, container) => {
    const card = document.createElement("div");
    const menuTitle = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("h4");
    const price = document.createElement("div");
    const description = document.createElement("p");

    card.classList.add("card");
    img.classList.add("img");
    menuTitle.classList.add("menu-title");
    name.classList.add("name");
    price.classList.add("price");
    description.classList.add("description");

    img.src = submenu.url;
    name.textContent = submenu.name;
    price.textContent = submenu.price;
    description.textContent = submenu.description;

    menuTitle.append(name, price);
    card.append(img, menuTitle, description);
    container.append(card);
};
