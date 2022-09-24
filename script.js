let menu = document.querySelector("#menu");
let list = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  list.classList.toggle("active");
});
