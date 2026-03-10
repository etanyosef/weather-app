export const renderHomepage = () => {
    const content = document.getElementById("content");
    const welcomeContainer = document.createElement("div");
    const welcome = document.createElement("h2");
    const welcomePara = document.createElement("p");
    const openingHoursContainer = document.createElement("div");
    const openingHours = document.createElement("h2");
    const openingPara = document.createElement("p");

    content.textContent = "";

    welcome.textContent = "Welcome to Sagit's Carenderia!";
    welcomePara.textContent = "Kaon namo dri kay lami kayo ni!";
    welcomeContainer.append(welcome);
    welcomeContainer.append(welcomePara);
    welcomeContainer.classList.add("welcome");
    content.append(welcomeContainer);

    openingHours.textContent = "Opening Hours";
    openingPara.textContent = "We are open from Monday to Saturday 7am to 8pm.";
    openingHoursContainer.append(openingHours);
    openingHoursContainer.append(openingPara);
    openingHoursContainer.classList.add("opening-hours");
    content.append(openingHoursContainer);
};
