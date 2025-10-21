const openModalButton1 = document.querySelector("#open-modal1")
const openModalButton2 = document.querySelector("#open-modal2")
const modal1 = document.querySelector("#modal1")
const modal2 = document.querySelector("#modal2")
const fade1 = document.querySelector("#fade1")
const fade2 = document.querySelector("#fade2")


const toggleModal = () => {
    console.log("modal 1")
    modal1.classList.toggle("hide");
    fade1.classList.toggle("hide");
}

const toggleModal2 = () => {
    console.log("modal 2")
    modal2.classList.toggle("hide");
    fade2.classList.toggle("hide");
}

[openModalButton2, fade2].forEach(el => {
    el.addEventListener("click", () => toggleModal2());
});

[openModalButton1, fade1].forEach(el => {
    el.addEventListener("click", () => toggleModal());
});