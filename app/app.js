// "use strict";
// import data from "/app/data.json" assert { type: "json" };

// let main = document.querySelector("main");

// const languagesArr = [];

// data.forEach((job) => {
//   job.languages.forEach((language) => languagesArr.push(language));
// });

// // ! use a function to increment a counter each time it's called to index values from the array above

// let index = 0;

// const indexIncrementor = function () {
//   if (index < languagesArr.length - 1) {
//     index++;
//   }
//   return languagesArr[index];
// };

// let html;
// you can add .join('') later if things doesn't workoout
// data.map((objValue) => {
//   // TODO: Jobs listing

//   if (objValue.new) {
//     html = `
//             <section
//               class="photosnap--container px-4 py-3 flex flex-col w-full bg-white rounded items-center justify-between relative mt-10 md:flex-row"
//             >
//               <div class="info--container flex w-full items-center md:w-1/2">
//                 <figure
//                   class="w-[40px] absolute translate-y-[-62px] md:relative md:translate-y-0 md:w-[80px] md:mr-6"
//                 >
//                   <img
//                     src="${objValue.logo}"
//                     alt="${objValue.company}"
//                     class="w-full top-0 left-0"
//                   />
//                 </figure>

//                 <div
//                   class="info flex flex-col justify-center gap-[0.5rem] mt-4 md:mt-0"
//                 >
//                   <div class="company--section flex items-center gap-[0.5rem]">
//                     <p class="text-desaturatedDarkCyan font-bold">${objValue.company}</p>
//                     <span class="bg-desaturatedDarkCyan font-bold px-2 py-[1px] rounded-full text-white text-sm">NEW!</span>
//                   </div>
//                   <p class="text-veryDarkGrayishCyan font-bold">
//                     ${objValue.position}
//                   </p>

//                   <div class="job--listing-info--section flex gap-[1rem]">
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.postedAt}</span>
//                     <span>.</span>
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.contract}</span>
//                     <span>.</span>
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.location}</span>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 class="categories--container pt-4 mt-8 w-full flex gap-[0.5rem] border-t border-t-darkGrayishCyan flex-wrap md:pt-0 md:mt-0 md:border-none md:w-1/2 md:h-[88px] md:items-center md:justify-end"
//               >
//                 <span
//                   class="text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >${objValue.role}</span
//                 >
//                 <span
//                   class="text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >${objValue.level}</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >HTML</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >CSS</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >JavaScript</span
//                 >
//               </div>
//             </section>`;
//   }

//   if (objValue.featured) {
//     html = `
//             <section
//               class="photosnap--container px-4 py-3 flex flex-col w-full bg-white rounded items-center justify-between relative mt-10 md:flex-row"
//             >
//               <div class="info--container flex w-full items-center md:w-1/2">
//                 <figure
//                   class="w-[40px] absolute translate-y-[-62px] md:relative md:translate-y-0 md:w-[80px] md:mr-6"
//                 >
//                   <img
//                     src="${objValue.logo}"
//                     alt="${objValue.company}"
//                     class="w-full top-0 left-0"
//                   />
//                 </figure>

//                 <div
//                   class="info flex flex-col justify-center gap-[0.5rem] mt-4 md:mt-0"
//                 >
//                   <div class="company--section flex items-center gap-[0.5rem]">
//                     <p class="text-desaturatedDarkCyan font-bold">${objValue.company}</p>
//                     <span class="bg-desaturatedDarkCyan font-bold px-2 py-[1px] rounded-full text-white text-sm">FEATURED!</span>
//                   </div>
//                   <p class="text-veryDarkGrayishCyan font-bold">
//                     ${objValue.position}
//                   </p>

//                   <div class="job--listing-info--section flex gap-[1rem]">
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.postedAt}</span>
//                     <span>.</span>
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.contract}</span>
//                     <span>.</span>
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.location}</span>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 class="categories--container pt-4 mt-8 w-full flex gap-[0.5rem] border-t border-t-darkGrayishCyan flex-wrap md:pt-0 md:mt-0 md:border-none md:w-1/2 md:h-[88px] md:items-center md:justify-end"
//               >
//                 <span
//                   class="text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >${objValue.role}</span
//                 >
//                 <span
//                   class="text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >${objValue.level}</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >HTML</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >CSS</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >JavaScript</span
//                 >
//               </div>
//             </section>`;
//   }

//   if (objValue.new && objValue.featured) {
//     html = `
//             <section
//               class="photosnap--container px-4 py-3 flex flex-col w-full bg-white border-l-[5px] border-l-desaturatedDarkCyan rounded items-center justify-between relative mt-10 md:flex-row"
//             >
//               <div class="info--container flex w-full items-center md:w-1/2">
//                 <figure
//                   class="w-[40px] absolute translate-y-[-62px] md:relative md:translate-y-0 md:w-[80px] md:mr-6"
//                 >
//                   <img
//                     src="${objValue.logo}"
//                     alt="${objValue.company}"
//                     class="w-full top-0 left-0"
//                   />
//                 </figure>

//                 <div
//                   class="info flex flex-col justify-center gap-[0.5rem] mt-4 md:mt-0"
//                 >
//                   <div class="company--section flex items-center gap-[0.5rem]">
//                     <p class="text-desaturatedDarkCyan font-bold">${objValue.company}</p>
//                     <span class="bg-desaturatedDarkCyan font-bold px-2 py-[1px] rounded-full text-white text-sm">NEW!</span>

//                   <span class="bg-veryDarkGrayishCyan font-bold px-2 py-[1px] rounded-full text-white text-sm"
//                       >FEATURED</span>
//                   </div>
//                   <p class="text-veryDarkGrayishCyan font-bold">
//                     ${objValue.position}
//                   </p>

//                   <div class="job--listing-info--section flex gap-[1rem]">
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.postedAt}</span>
//                     <span>.</span>
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.contract}</span>
//                     <span>.</span>
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.location}</span>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 class="categories--container pt-4 mt-8 w-full flex gap-[0.5rem] border-t border-t-darkGrayishCyan flex-wrap md:pt-0 md:mt-0 md:border-none md:w-1/2 md:h-[88px] md:items-center md:justify-end"
//               >
//                 <span
//                   class="text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >${objValue.role}</span
//                 >
//                 <span
//                   class="text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >${objValue.level}</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >HTML</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >CSS</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >JavaScript</span
//                 >
//               </div>
//             </section>`;
//   }

//   if (!objValue.new && !objValue.featured) {
//     html = `
//             <section
//               class="photosnap--container px-4 py-3 flex flex-col w-full bg-white rounded items-center justify-between relative mt-10 md:flex-row"
//             >
//               <div class="info--container flex w-full items-center md:w-1/2">
//                 <figure
//                   class="w-[40px] absolute translate-y-[-62px] md:relative md:translate-y-0 md:w-[80px] md:mr-6"
//                 >
//                   <img
//                     src="${objValue.logo}"
//                     alt="${objValue.company}"
//                     class="w-full top-0 left-0"
//                   />
//                 </figure>

//                 <div
//                   class="info flex flex-col justify-center gap-[0.5rem] mt-4 md:mt-0"
//                 >
//                   <div class="company--section flex items-center gap-[0.5rem]">
//                     <p class="text-desaturatedDarkCyan font-bold">${objValue.company}</p>
//                   </div>
//                   <p class="text-veryDarkGrayishCyan font-bold">
//                     ${objValue.position}
//                   </p>

//                   <div class="job--listing-info--section flex gap-[1rem]">
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.postedAt}</span>
//                     <span>.</span>
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.contract}</span>
//                     <span>.</span>
//                     <span class="texst-sm text-darkGrayishCyan">${objValue.location}</span>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 class="categories--container pt-4 mt-8 w-full flex gap-[0.5rem] border-t border-t-darkGrayishCyan flex-wrap md:pt-0 md:mt-0 md:border-none md:w-1/2 md:h-[88px] md:items-center md:justify-end"
//               >
//                 <span
//                   class="text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >${objValue.role}</span
//                 >
//                 <span
//                   class="text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >${objValue.level}</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >HTML</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >CSS</span
//                 >
//                 <span
//                   class="language text-desaturatedDarkCyan font-bold py-[2px] px-2 bg-lightGrayishCyanFilter rounded"
//                   >JavaScript</span
//                 >
//               </div>
//             </section>`;
//   }

//   main.insertAdjacentHTML("beforeend", html);
// });
