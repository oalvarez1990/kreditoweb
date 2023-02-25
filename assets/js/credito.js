const creditoBtn = document.getElementById("credito-btn");
const modal = document.getElementById("modal-credito");

creditoBtn.addEventListener("click", () => {
  console.log("click");
    modal.classList.add("is-active");
});
