var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You can have any brew you want... as long as it\'s a Corona.',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  var randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
document.getElementById("main-title").innerHTML = "DOM's page";

  // Part 2
  function backgroundChange(){
    let colorChange = document.querySelector('body').style.backgroundColor = "Green";
  }

  backgroundChange()

//   Part 3
function favThings(){
  let sideBar = document.querySelector('.side-bar');
  let favThings = sideBar.getElementByTagName('li');
  favThings[5].style.display = "none";
  console.log(favThings[5])
}

favThings()
//   // Part 4
  function specialTitle(){
    let title = document.querySelectorAll('.special-title');
    for(let i = 0; i < titles.length; i++){
      titles[i].style.fontSize = "2rem"
    }
  }
specialTitle();
//   // Part 5
function postRaces(){
  var sideBar = document.querySelectorAll('.sideBar')
  let races = sideBar[1]
  let places = races.getElementByTagName('li');
  for(let i = 0; i < places.length; i++){
    if(places[i].innerHTML == "Chicago"){
      places[i].style.display = "none";
    }
  }
}

postRaces()
  // Part 6
let addRaceLocation = (location)=>{
  let sidebar=document.querySelectorAll('.side-bar');
  let races = sidebar[1];
  let ul = races.querySelector('ul')
  let places = races.getElementByTagName('li');
  let newPlace = document.createElement('li')
  let newPlaceText = document.createTextNode(location);
  newPlace.appendChild(newPlaceText)
}
addRaceLocation('The Bronx')

  // Part 7
function newBlog(){
  let post = document.createElement('div')
  post.className = "blog-post purple";

  let title = document.createElement('h1')
  titleinnerHTML = "The Bronx" 

  let p = document.createElement('p')
  p.innerHTML = "I DROVE MY CAR INTO A BODEGA AND PICKED UP A BACANEGGANDCHEESE"

  let main = document.querySelector('.main')

main.appendChild(post)
main.appendChild(title)
main.appendChild(p)

console.log(main, post, titlt, p)
}

newBlog()

//   // Part 8
// function ranQuote(){
//   let button = document.querySelector('#quote-title')
//   console.log(button)
// }

// ranQuote()
  // Part 9




});
