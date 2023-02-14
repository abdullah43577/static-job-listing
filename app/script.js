"use strict";
const main = document.querySelector("main");
const filterContainer = document.querySelector(".filter--container");

main.addEventListener("click", function (e) {
  let clickedEl = e.target.closest(".categories--container");
  console.log(clickedEl);

  if (!clickedEl) return;

  filterContainer.classList.remove("hide");
  filterContainer.classList.add("show");
});
