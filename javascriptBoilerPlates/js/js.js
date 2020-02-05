/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Stardate 235678.89: JavaScript from js/js.js is up and running.');

//paste your javascript here

var myGallery = [
  "watermelon.jpg",
  "fish.jpg",
  "kite.jpg",
  "blue summer.jpg",
  "feet.jpg",
  "wild beach.jpg",
  "samsoisland.jpg",
  "poppies.jpg"

];

//create the html

for (i = 0; i < myGallery.length; i++) {
    // note the shorthand code below
    exhibition.innerHTML += '<img src="images/' +
        myGallery[i] +
        '" alt="from my gallery">';
}
