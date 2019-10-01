// Your code goes here

//mouseover//

const busImg = document.querySelector("img");
// console.log(busImg);

busImg.addEventListener("mouseover", () => {
    busImg.style.transform = "scale(2.3)";
    busImg.style.transition = "all 0.4s";
})

//mouseleave//

busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)";
})

// welcomeText = document.querySelectorAll('h2');
// console.log(welcomeText);

//click//

document.querySelectorAll("h2").forEach(element => {
    element.addEventListener("click", () => {
        element.style.color = "purple";
    })
})

//keydown//

window.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
    case 32: //spacebar
    setBackgroundColor('lavender');
    break;
    case 49: //1
    setBackgroundColor('lightgreen'); 
    }

});
function setBackgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}

//double-click//

const changeImg = document.querySelector('.img-content img');
console.log(changeImg);
changeImg.addEventListener("dblclick", () => {
    changeImg.src= "../img/plane.jpg";
})

//load//

window.addEventListener('load', (event) => {
    console.log('page has been freaking loaded');
});

//Resize//

const firstResize = document.querySelector('.logo-heading');
console.log(firstResize);

window.addEventListener('resize',() => {
    firstResize.style.color = "green";
})

window.addEventListener('resize', (event) => {
        console.log('page has been resized');
    }) 
    
//Scroll//

const body = document.querySelector('body');

    window.addEventListener('scroll', () => {
    body.style.backgroundColor = "pink";
})


// const firstFocus = document.querySelector('.btn');
// console.log(firstFocus);

// firstFocus.addEventListener('focus', (event) => {
//     event.target.style.fontSize= '4rem';
// })


//mousemove//

const mouseMove = document.querySelector('.btn');
console.log(mouseMove);

mouseMove.addEventListener("mousemove", () => {
    mouseMove.style.transform = "scale(3.0)";
    mouseMove.style.transition = "1s";
    

})

mouseMove.addEventListener("mouseout", () => {
    mouseMove.style.transform = "scale(1)";
    mouseMove.style.fontSize = ".2rem";
})


//Event Propagation//