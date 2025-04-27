


const sliderImages = [
"./images/1.jpg",
"./images/2.jpg",
"./images/a.jpg",
"./images/a2.jpg",
"./images/c1.jpg",
"./images/c2.jpg",
"./images/d1.jpg",
"./images/d2.jpg",
"./images/l.jpg",
"./images/l2.jpg",
"./images/b.jpg",
];

const sliderDom = document.getElementById("slider");
let currentImage = 0;
let allImages = []; // Cached list of <img> elements

function renderImages() {
sliderImages.forEach((image) => {
const img = document.createElement("img");
img.src = image;
img.style.opacity = 0;
img.style.transition = "opacity 0.5s"; // Smooth fade transition
sliderDom.appendChild(img);
});
allImages = document.querySelectorAll("#slider img");
}

function clearImages() {
allImages.forEach((img) => {
img.style.opacity = 0;
});
}

function showImage(index) {
clearImages();
allImages[index].style.opacity = 1;
}

function init() {
renderImages();
showImage(currentImage);
}

init();

// Button handlers
document.querySelector("#prevButton").onclick = function() {
currentImage = (currentImage - 1 + sliderImages.length) % sliderImages.length;
showImage(currentImage);
};

document.querySelector("#nextButton").onclick = function() {
currentImage = (currentImage + 1) % sliderImages.length;
showImage(currentImage);
};

let btn=document.querySelector("#nextButton")
//let btun=document.querySelector("#nextButton")




btn.style.height="70px"
btn.style.width="250px"
btn.style.backgroundColor="green"
btn.style.border="red"

btn.addEventListener('click',click)
function click(){
  setInterval(changeBackgroundColor,2000)

}
function changeBackgroundColor(){
  let hexcode="#"
  let hexvalue="0123456789ABCDEF"
  

  for(let i=0;i<6;i++){
  ranindex=Math.floor(Math.random()*hexvalue.length)
  hexcode=hexcode+hexvalue[ranindex]

  
}

document.body.style.backgroundColor=hexcode
document.querySelector('h1').innerHTML=hexcode
}

const quotes = [
  "Famous Quotes -- Motlu: Patlu kuch karo!Patlu, do something! Yeh Chingam ka jaal hai, bach ke jaana namumkin hai!(This is Chingams web; escaping is impossible!",
  "Shinchan Quotes-- Mujhe kuch bhi nahi karna hai, bas masti karni hai! Action Kamen, meri madad karo! n",
  "Doraemon Quotes--  Main tumhari madad ke liye hoon!(I am here to help you!) Doraemon to Nobita, whenever he brings out gadgets.",
  "Doraemon Quotes -- Nobita, tumhe khud par bharosa karna chahiye.(Nobita, you should believe in yourself.) Doraemon always motivates Nobita like a true friend.",
  "Loki Quotes -- I am Loki of Asgard, and I am burdened with glorious purpose.",
  "Loki Quotes -- Your savior is here!(Thor: Ragnarok)I never wanted the throne. I only ever wanted to be your equal.",
  " Animi Quotes -- I am Wonder Woman! And you are no match for me!",
  "Pocahontas Quotes  -- (from Disney's Pocahontas):Listen with your heart, you will understand.",
  "(Pocahontas encourages listening to your heart’s wisdom.)",
  
  ];
  
  // Function to generate a random quote from the array
  function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
  }
  
  // Event listener for button click

  
  document.getElementById('nextButton','prevButton').addEventListener('click', function() {
  const quote = generateRandomQuote();
  document.getElementById('quote').textContent = quote;
  });
  








