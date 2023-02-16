# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](<./screenshots/Screenshot%20(105).png>)

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/responsive-static-job-listing-page-built-using-tailwind-and-vanilla-js-78du-Cgj7F)
- Live Site URL: [Live site URL here](https://static-pg.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/docs/installation) - CSS Framework

### What I learned

Using the js code below, I learnt that I can delete an element from an array without me as the user knowing the index, I could just get the index using the `indexOf()` method and use splice to delete that exact element from the array. This are two powerful array methods everyone should learn.

```js
// accessing the index of the selected content
const index = selectedFilter.indexOf(textContentValue);

// if true
if (index > -1) {
  selectedFilter.splice(index, 1);
}
```

### Continued development

I'll continue developing myself in the way I think of building projects critically, to get the best the result with the least amount of effort or lines of codes.

### Useful resources

- [Resource](https://tailwindcss.com/docs/installation) - This helped me style the page faster

## Author

- Website - [Abdullah Ayoola](https://github.com/abdullah43577)
- Frontend Mentor - [@abdullah43577](https://www.frontendmentor.io/profile/abdullah43577)
- Twitter - [@officialayo540](https://twitter.com/officialayo540)

## Acknowledgments

I can't submit this project without acknowledging someone, `@Nnadivictory25`.
Link to Github Profile: - [Github Profile](https://github.com/Nnadivictory25)

After almost giving up on this project, looking at his code inspired some changes to mine, which later resulted in me also making the final commit to this code. I learnt a lot just viewing his code.
