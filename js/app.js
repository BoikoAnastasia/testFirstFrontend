const reservationBtn = document.querySelector("#btnReserve");
const modal = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".btn-hideModal");

reservationBtn.addEventListener("click", ()=> {
    modal.style.display = "block";
})

closeModalBtn.addEventListener("click", ()=> {
    modal.style.display = "none";
})