const modeSwitcher = document.getElementById("modeSwitcher");
// const modeSwitcherIcon = document.getElementById("modeSwitcherIcon");
const html = document.getElementById("html");
const modeSwitcherIcon = document.getElementById("modeSwitcherIcon");

modeSwitcher.addEventListener("change", () => {
    console.log(modeSwitcher.checked);
    if (modeSwitcher.checked) {
        html.dataset.theme = "dark";
        modeSwitcherIcon = url(darkMode.svg);
    } else {
        html.dataset.theme = "light";
        modeSwitcherIcon = url(lightMode.svg);
    }
});