// ....................... THIS COMMENT CODE ALSO WORK BUT I MAKE IT IN ANOTHER WAY ................
// let movies = [
//   {
//     name: "falcon and winter solider",
//     des:
//       "lor jwehdub34grdy ge3dy1e3 edyg d2ygwed 2e3d2uewgd2y3d etgdywskqnasjij1a kqk   mqzkamsmem",
//     image: "img/slide2.png"
//   },
//   {
//     name: "loki",
//     des:
//       "lor jwehdub34grdy ge3dy1e3 edyg d2ygwed 2e3d2uewgd2y3d etgdywskqnasjij1a kqk   mqzkamsmem",
//     image: "img/slide1.png"
//   },
//   {
//     name: "wanda vision",
//     des:
//       "lor jwehdub34grdy ge3dy1e3 edyg d2ygwed 2e3d2uewgd2y3d etgdywskqnasjij1a kqk   mqzkamsmem",
//     image: "img/slide3.png"
//   },
//   {
//     name: "raya and last dragon",
//     des:
//       "lor jwehdub34grdy ge3dy1e3 edyg d2ygwed 2e3d2uewgd2y3d etgdywskqnasjij1a kqk   mqzkamsmem",
//     image: "img/slide4.png"
//   },
//   {
//     name: "luca",
//     des:
//       "lor jwehdub34grdy ge3dy1e3 edyg d2ygwed 2e3d2uewgd2y3d etgdywskqnasjij1a kqk   mqzkamsmem",
//     image: "img/slide5.png"
//   }
// ];

// const carousel = document.querySelector(".caraousel"); //function
// var sl = document.getElementsByClassName("slide");
// let sliders = [];

let slideIndex = 0; //track the  currnt slide
createslide();
function createslide() {
  // if (slideIndex >= movies.length) {
  //   slideIndex = 0;
  // }

  //create DOM elements
  // let slide = document.createElement("div");
  // var imgElement = document.createElement("img");
  // let content = document.createElement("div");
  // let h1 = document.createElement("h1");
  // let p = document.createElement("p");

  //attching all elements
  // imgElement.appendChild(document.createTextNode(" "));
  // h1.appendChild(document.createTextNode(movies[slideIndex].name));
  // p.appendChild(document.createTextNode(movies[slideIndex].des));
  // content.appendChild(h1);
  // content.appendChild(p);
  // //slide.appendChild(content);
  // slide.appendChild(imgElement);
  // carousel.appendChild(slide);

  //setting up images
  // imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elemets classnames same as css
  // slide.className = "slider";
  // content.className = "slide-content";
  // h1.className = "movie-title";
  // p.className = "movie-des";

  // sliders.push(slide);

//   if (sliders.length) {
//     sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
//       20 * (sliders.length - 2)
//     }px)`;
//     // sliders[0].style.marginLeft =
//     // "calc{-$(100 * (sliders.length - 2)) - $(20 * (sliders.length - 2))px}";
//   }

  // tying new js code
  var i;
  var sl = document.getElementsByClassName("slide");
  for (i = 0; i < sl.length; i++) {
    // at statring all poster display none
    sl[i].style.display = "none";
  }
  if (slideIndex > sl.length) {
    slideIndex = 1;
  }
  sl[slideIndex - 1].style.display = "block";
  setTimeout(createslide, 3000);
}

// for (let i = 0; i < 3; i++) {
//   createslide();
// }

// setInterval(() => {
//   createslide();
// }, 3000);

//video cards
const videoCards = [...document.querySelectorAll(".video.card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });

  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card slider
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
