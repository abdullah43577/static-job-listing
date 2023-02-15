// "use strict";
// const main = document.querySelector("main");
// const filtersContainer = document.querySelector(".filter--container");
// const categoryFilter = document.querySelector(".category--filter");
// const filterSpan = document.querySelectorAll(".categories--container > span");

// let textContent = [];

// let pushed = false;

// main.addEventListener("click", function (e) {
//   let clickedEl = e.target.closest(".categories--container");

//   if (!clickedEl) return;

//   filtersContainer.classList.remove("hide");
//   filtersContainer.classList.add("show");

//   const filters = clickedEl.querySelectorAll(".categories--container > span");
//   let filtersHtml = [];

//   filters.forEach((filter) => {
//     if (pushed === false) {
//       textContent.push(filter.textContent);
//       filtersHtml.push(`
//            <div class="renderedFilter flex items-center rounded bg-lightGrayishCyanBG filter">
//               <span class="px-2 py-1 font-bold text-desaturatedDarkCyan cursor-pointer"
//                 >${filter.textContent}</span
//               >
//               <figure
//                 class="cursor-pointer rounded-r bg-desaturatedDarkCyan px-2 py-2 hover:bg-veryDarkGrayishCyan"
//               >
//                 <img src="./images/icon-remove.svg" alt="icon-remove" />
//               </figure>
//             </div>`);
//     }
//   });
//   pushed = true;
//   runCheck();

//   let filterHtmlString = filtersHtml.join("");
//   categoryFilter.insertAdjacentHTML("beforeend", filterHtmlString);
// });

// let newArray;

// filtersContainer.addEventListener("click", function (e) {
//   let clickedEl = e.target.closest(".renderedFilter");

//   if (!clickedEl) return;

//   clickedEl.remove();
//   runCheck();
// });

// const runCheck = function () {
//   // Find all elements with matching textContent using filter()
//   let matchingElements = Array.from(filterSpan)
//     .filter((span) => {
//       if (textContent.includes(span.textContent))
//         return span.parentElement.parentElement;
//     })
//     .map((span) => span.parentElement.parentElement);

//   // Log the matching elements
//   newArray = new Set(matchingElements);
//   displayFilteredSection();
// };

// const displayFilteredSection = function () {
//   const sectionContainer = document.querySelector(".section--container");

//   newArray.forEach((el) => {
//     console.log(el);
//     sectionContainer.innerHTML = "";
//     sectionContainer.insertAdjacentElement("beforebegin", el);
//   });
// };
