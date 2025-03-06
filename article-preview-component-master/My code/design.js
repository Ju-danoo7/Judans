const documen = document.querySelector(".main2-sec21");
const link = document.querySelector("#link");
const subst = document.querySelector(".sect1-sec22");
const firstsubst = document.querySelector(".main2-sec21");
const share = document.querySelector("#share");
const linkImg = document.querySelector("#linkImg");
const selection = document.querySelector(".selection");
// const phoneScreen = window.matchMedia("(max-width: 400px)");


link.addEventListener("click", () => {
    subst.style.background = "hsl(217, 19%, 35%)";
    selection.classList.toggle('visible')
})
share.addEventListener("click", () => {
    selection.classList.remove('visible')
})
