const openModalButton1 = document.querySelector("#open-modal1")
const openModalButton2 = document.querySelector("#open-modal2")
const modal1 = document.querySelector("#modal1")
const modal2 = document.querySelector("#modal2")
const fade1 = document.querySelector("#fade1")
const fade2 = document.querySelector("#fade2")

[openModalButton1, fade1].forEach((el) => {
    el.addEventlistener("click", () => console.log("teste"));
});