"use strict";
import data from "/app/data.json" assert { type: "json" };

let main = document.querySelector("main");
let sectionContainer = document.querySelector(".section--container");

data.map((objValue) => {
  // TODO: Jobs listing

  let html = `<section
          class="${
            objValue.company
          }--container relative mt-10 flex w-full flex-col items-center justify-between rounded ${
    objValue.new && objValue.featured
      ? `border-l-[5px] border-l-desaturatedDarkCyan`
      : ""
  }  bg-white px-4 py-3 md:flex-row"
        >
          <div class="info--container flex w-full items-center md:w-1/2">
            <figure
              class="absolute w-[40px] translate-y-[-62px] md:relative md:mr-6 md:w-[80px] md:translate-y-0"
            >
              <img
                src="${objValue.logo}"
                alt="${objValue.company}"
                class="top-0 left-0 w-full"
              />
            </figure>

            <div
              class="info mt-4 flex flex-col justify-center gap-[0.5rem] md:mt-0"
            >
              <div class="company--section flex items-center gap-[0.5rem]">
                <p class="font-bold text-desaturatedDarkCyan">${
                  objValue.company
                }</p>
                ${
                  objValue.new
                    ? `<span
                  class="rounded-full bg-desaturatedDarkCyan px-2 py-[1px] text-sm font-bold text-white">NEW!
                </span>`
                    : ""
                }

                ${
                  objValue.featured
                    ? `<span
                  class="rounded-full bg-veryDarkGrayishCyan px-2 py-[1px] text-sm font-bold text-white">FEATURED
                </span>`
                    : ""
                }
              </div>

              <p class="font-bold text-veryDarkGrayishCyan">
                ${objValue.company}
              </p>

              <div class="job--listing-info--section flex gap-[1rem]">
                <span class="text-sm text-darkGrayishCyan">${
                  objValue.postedAt
                }</span>
                <span>.</span>
                <span class="text-sm text-darkGrayishCyan">${
                  objValue.contract
                }</span>
                <span>.</span>
                <span class="text-sm text-darkGrayishCyan">${
                  objValue.location
                }</span>
              </div>
            </div>
          </div>

          <div
            class="categories--container mt-8 flex w-full flex-wrap gap-[0.5rem] border-t border-t-darkGrayishCyan pt-4 md:mt-0 md:h-[88px] md:w-1/2 md:items-center md:justify-end md:border-none md:pt-0"
          >
            <span
              data-role="${objValue.role}"
              class="cursor-pointer rounded bg-lightGrayishCyanFilter py-[2px] px-2 font-bold text-desaturatedDarkCyan hover:bg-desaturatedDarkCyan hover:text-white"
              >${objValue.role}
            </span>

            <span
              data-level="${objValue.level}"
              class="cursor-pointer rounded bg-lightGrayishCyanFilter py-[2px] px-2 font-bold text-desaturatedDarkCyan hover:bg-desaturatedDarkCyan hover:text-white"
              >${objValue.level}
            </span>


          ${objValue.languages
            .map((lang) => {
              return `<span
              data-languages="${lang}"
              class="cursor-pointer rounded bg-lightGrayishCyanFilter py-[2px] px-2 font-bold text-desaturatedDarkCyan hover:bg-desaturatedDarkCyan hover:text-white"
              >${lang}</span>`;
            })
            .join("")}

            ${objValue.tools
              .map((tool) => {
                return `<span
              data-tools="${tool}"
              class="cursor-pointer rounded bg-lightGrayishCyanFilter py-[2px] px-2 font-bold text-desaturatedDarkCyan hover:bg-desaturatedDarkCyan hover:text-white"
              >${tool}</span>`;
              })
              .join("")}
          </div>
        </section>`;

  sectionContainer.insertAdjacentHTML("beforeend", html);
});
