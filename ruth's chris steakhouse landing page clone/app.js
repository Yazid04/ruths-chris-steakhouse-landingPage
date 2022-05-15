const openSearchBarOption = document.getElementById("findOption");

openSearchBarOption.addEventListener("click", openSeachBar)
function openSeachBar() {
  const searchContainer = openSearchBarOption.parentElement.querySelector(".searchBarContainer")
  searchContainer.classList.toggle("showSearchBar");
  const arrowToUp = openSearchBarOption.parentElement.querySelector(".fa-angles-down");
  arrowToUp.classList.toggle("flipArrow");
  arrowToUp.style.padding = '.5em';

  const btnClose = openSearchBarOption.parentElement.querySelector(".closeBtn");
  btnClose.addEventListener("click", () => {
    searchContainer.classList.remove("showSearchBar")
    arrowToUp.classList.toggle("flipArrow");
  })
}


function customLayout() {
  const customLayoutForNavSmSizes = document.querySelector(".upperNav_sm-screen-layout");
  customLayoutForNavSmSizes.innerHTML =
    `<main class="logoCont">
     <img src="imgs/logo.jpg" alt="restaurant Logo" class="Logo">
   </main>
   <main class="reservations">
     <h1 class="title">RESERVATIONS</h1>
     <i class="fa-solid fa-circle-arrow-right"></i>
   </main>
   <main onClick="showpopUpPage(event)" class="iconsContainer">
     <i class="fa-solid fa-x"></i>
     <span class="fa-solid bar">☰</span>
   </main>
   <div class="optionsPopUp">
     <main class="linksContainer">
       <li><a href="#" class="links">FOOD & DRINK</a></li>
       <li><a href="#" class="links">OUR STORY</a></li>
       <li><a href="#" class="links">GIFT CARDS</a></li>
       <li><a href="#" class="links">PRIVATE EVENTS</a></li>
       <li><a href="#" class="links">PROMOTIONS</a></li>
       <button type="button" class="btns orderNow">ORDER NOW</button>
       <button type="button" class="btns reservations">RESERVATIONS</button>
     </main>
   </div>`
}
customLayout();


function showpopUpPage(e) {
  const iconsContainer = e.currentTarget;
  const iconBar = iconsContainer.querySelector(".bar");
  const iconClose = iconsContainer.querySelector(".fa-x")
  iconBar.classList.toggle('removeBarBtn')
  iconClose.classList.toggle("showCloseBtn")
  const popUpPage = iconsContainer.nextElementSibling;
  popUpPage.classList.toggle("openOptionsPopUp")
  const overLayHomePic = document.querySelector(".overlay-home")
  overLayHomePic.classList.toggle("hideOverlay")
}


const date = document.getElementById("date");

const createDate = new Date();
let dynamicDate = createDate.getFullYear();
date.innerText = dynamicDate;