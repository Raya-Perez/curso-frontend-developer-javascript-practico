const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobilIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const closeProducDetalIcon = document.querySelector('.product-description-close')
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const openProducDetailContainer = document.querySelector ('.product-description');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobilIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
closeProducDetalIcon.addEventListener('click', closeProducDetalIconAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
  
    if (!isAsideClosed) {
      aside.classList.add('inactive');
     }
    
    desktopMenu.classList.toggle('inactive');
  }
  
  function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
  
    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    }
    closeProducDetalIconAside()
    mobileMenu.classList.toggle('inactive');
  }
  
  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
    }
      if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
      }
    const closeProducDetail = openProducDetailContainer.classList.contains('inactive');
    if (!closeProducDetail) {
      openProducDetailContainer.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
  }
  
  function openProducDetailAside(){
    cardsContainer.classList.add('inactive');
    openProducDetailContainer.classList.remove('inactive')
  }
  function closeProducDetalIconAside() {
    openProducDetailContainer.classList.add('inactive')
  }

 const producList = [];
 producList.push({
  name: 'bike',
  price: 120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 });

 producList.push({
  name: 'Manillar',
  price: 50,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 });

 producList.push({
  name: 'Llanta',
  price: 80,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 });

 producList.push({
  name: 'sillin',
  price: 14,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 });

 function renderProducts(arr){
  for (product of arr) {
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.Image);
   productImg.addEventListener('click' ,openProducDetailAside);

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');

   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price; 
   const productName = document.createElement('p');
   productName.innerText = product.name; 

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

   productInfoFigure.appendChild(productImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);

 }
}

renderProducts(producList);