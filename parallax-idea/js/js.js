/**
 * file: js.js
 * purpose: interactivity
 **/
/* ADD OR REMOVE A CSS CLASS */

// remove a class ---
//  element.classList.remove(remClass);

// add a class
// element.classList.add(addClass);

// element.addEventListener("click", myFunction);
h.addEventListener(
    'click',
    function () {
        console.log('Adding the class xx');
        h.classList.add('abracadabra');
    }
);

document.getElementById('mad').style.display='none';

// see: https://www.w3schools.com/jsref/prop_element_classlist.asp

// CREATE AN EVENTLISTENER
// Move anima-1, anima-2 and anima-3 and create parallax effect
// tip: object.addEventListener("scroll", myScript);
// see: https://www.w3schools.com/jsref/event_onscroll.asp

// SUGGESTED SOLUTION
let speed = 10;
let speed1 = 6;


let myParallax = function () {
    console.log('scroll detected');
    anima_1.style = 'top:' + speed + 'px';
    speed += 7; //when we add +2 it means its a bit slower, all together = 5//



    console.log('cat ....');
    anima_2.style = 'top:' + speed1 + 'px';
    speed1 += 3; //when we add +2 it means its a bit slower, all together = 5//

        // set position here }
}

document.addEventListener('scroll', myParallax);

