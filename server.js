const products = document.querySelectorAll('.product-thumbnail')
console.log(products);


const openCart = document.querySelector('.cart');
console.log(openCart);
const showCart = document.getElementById('fullCart');
console.log(showCart);

function seeCart(){
  if(
  showCart.style.display = "none"){
    showCart.style.display = "block";
  }
  else if(showCart.style.display = "block"){
    showCart.style.display = "none"
  }
}

 //Mobile menu js
 const openNav = document.getElementsByClassName("hamburger");
 const closeNav = document.getElementById("closeNav");
 //console.log(closeNav);
 const navLinks = document.getElementById("navlinks");
 console.log(navLinks);
 
 function closenav(){
  
  navLinks.style.display = "none"
}

 function menutoggle(){
    navLinks.style.display = "block"
  }
  const overlay =document.getElementById('overlay');
  const closeLay = document.getElementById('close-thumbail');
  // closeOverlay.addEventListener("click", function(){
  //   overlay.style.display = 'none';
  // })
  const showOverlay = document.querySelectorAll(".product-thumbnail");
  
  //.addEventListener("click", myOverlay);
  function myOverlay(){
    overlay.style.display = "block";
  }
  function closeOverlay(){
    overlay.style.display = "none";
    closeOverlay.src="images/icon-plus.svg";
  }
 
// js for product details page----------------------------------
const productImg = document.getElementById("product-img");
const thumbnail= document.getElementsByClassName("product-overlay");
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('previousBtn');


nextButton.onclick = function(){
  productImg.src = "images/image-product-1.jpg";
  productImg.src = "images/image-product-2.jpg";
  productImg.src = "images/image-product-3.jpg";
  // productImg.src = "images/image-product-4.jpg";
}
prevButton.onclick = function(){
  productImg.src = "images/image-product-4.jpg";
  productImg.src = "images/image-product-3.jpg";
  productImg.src = "images/image-product-2.jpg";
  productImg.src = "images/image-product-1.jpg";
}
thumbnail[1].onclick = function(){
  productImg.src = "images/image-product-2.jpg";
}
thumbnail[2].onclick = function(){
  productImg.src = "images/image-product-3.jpg";
}
thumbnail[3].onclick = function(){
  productImg.src = "images/image-product-4.jpg";
}

// mobile preview
const prevImg = document.getElementById('prevImg');
const nextImg = document.getElementById('nextImg');
const image = document.getElementById('mobileImg');

const images = ['images/image-product-1.jpg','images/image-product-2.jpg','images/image-product-3.jpg', 'images/image-product-4.jpg']; // Add your image URLs here
let currentIndex = 0;

function showImage(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }
  image.src = images[currentIndex];
}

prevImg.addEventListener('click', () => {
  currentIndex--;
  showImage(currentIndex);
});

nextImg.addEventListener('click', () => {
  currentIndex++;
  showImage(currentIndex);
});

showImage(currentIndex); 

const count = 0;
  const countEl = document.getElementById("countQuantity");
function increment(){

  console.log("clicked");
  countEl.textContent ++
  //   count += 1;
    // if(count <= 50){
    //     return ('')
    // }else if(count = 100){ 
    //     alert("cart is full, proceed to checkout")
    // }
    // else{
    //     return ("")
    // }
}
function decrement(){
  countEl.textContent --;
  console.log("clicked");
}


increment()
decrement()

// const increaseBtn =document.getElementById

var removeItemFromCar = document.getElementsByClassName('icon-delete');
for(var i = 0; i < removeItemFromCar.length; i++) {
  var button = removeItemFromCar[i]
  button.addEventListener('click', function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  })
}
function updateCartTotal(){
  var cartItemBox = document.getElementsByClassName('cart-details')[0]
cartItemBox

}

// const cartItems = document.querySelector('.cart-items');
// const totalPrice = document.querySelector('.total-price');
// // Function to update cart UI and calculate total price
// function updateCartUI() {
//   const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//   cartItems.innerHTML = '';
//   let total = 0;

//   cart.forEach(item => {
//       const li = document.createElement('li');
//       li.textContent = `${item.product} - Quantity: ${item.quantity} - Price: $${item.price * item.quantity}`;
//       const removeButton = document.getElementById('deleteItem');
//       removeButton.textContent = 'Remove';
//       removeButton.addEventListener('click', () => removeItemFromCart(item));
//       li.appendChild(removeButton);
//       cartItems.appendChild(li);
//       total += item.price * item.quantity;
//   });

//   totalPrice.textContent = total.toFixed(2);
// }

// // Function to add an item to cart
// document.getElementsByClassName('')
// function addToCart(product, price, quantity) {
//   const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//   cart.push({ product, price, quantity });
//   localStorage.setItem('cart', JSON.stringify(cart));
//   updateCartUI();
// }

// // Function to remove an item from cart
// function removeItemFromCart(item) {
//   const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//   const updatedCart = cart.filter(cartItem => cartItem.product !== item.product);
//   localStorage.setItem('cart', JSON.stringify(updatedCart));
//   updateCartUI();
// }

// Add event listeners to "Add to Cart" buttons
// const addToCartButtons = document.querySelectorAll('.add-btn');
// addToCartButtons.forEach(button => {
//   button.addEventListener('click', () => {
//       const product = button.getAttribute('data-product');
//       const price = parseFloat(button.getAttribute('data-price'));
//       const quantity = parseInt(button.previousElementSibling.value);
//       addToCart(product, price, quantity);
//   });
// });

// Initial cart UI update
//updateCartUI();

//  // Function to update cart icon and count
//  function updateCartUI() {
//   const cartCount = document.getElementById('count');
//   const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//   console.log(cart);
//   cartCount.textContent = cart.length;
// }

// // Function to add a product to cart
// function addToCart(product) {
//   const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//   cart.push(product);
//   localStorage.setItem('cart', JSON.stringify(cart));
//   updateCartUI();
// }

// // Add event listeners to "Add to Cart" buttons
// const addToCartButtons = document.querySelectorAll('.add-btn');
// addToCartButtons.forEach(button => {
//   button.addEventListener('click', () => {
//       const product = button.getAttribute('data-product');
//       addToCart(product);
//   });
// });

// // Initial cart UI update
// updateCartUI();
// Display initial image
// const nextImg = document.getElementById('nextImg');
// console.log(nextImg);
// const prevImg = document.getElementById('prevImg');
// const product = document.getElementsByClassName("main-img");
// console.log(product);

// nextImg.onclick = function(){
//   product.src = "images/image-product-1.jpg";
//   product.src = "images/image-product-2.jpg";
//   product.src = "images/image-product-3.jpg";
//   // productImg.src = "images/image-product-4.jpg";
// }
// prevImg.onclick = function(){
//   productImg.src = "images/image-product-4.jpg";
//   productImg.src = "images/image-product-3.jpg";
//   productImg.src = "images/image-product-2.jpg";
//   productImg.src = "images/image-product-1.jpg";
// }

//-----------------cartjs
// const product = [
//   {
//     id:0,
//     image:"images/image-product-1.jpg",
//     title:"White and Carton Sneakers",
//     price:100,
//   },
//   {
//     id:1,
//     image:"images/black-shoe.png",
//     title:"Black Curtis shoe",
//     price:70,
//   },
//   {
//     id:2,
//     image:"images/bag4.png",
//     title:"Pink Handbag",
//     price:50,
//   },
//   {
//     id:3,
//     image:"images/blue-trainers.png",
//     title:"Blue trainers",
//     price:50,
//   }
// ];

// const categories = [...new Set(product.map((item)=>
//   {return item}))]
//   let i=0;
//   document.getElementById("productRoot").innerHTML = categories.map((item)=>
//   {
//     var {image, title, price} = item;
//     return(
//       `<div class="row">
//         <div class="col-1">
//           <img class="img-dit" src=${image}></img>
//           </div>
//           <div class="col-1">
//           <p>${title}<p>
//           <h4>$ ${price}.00</h4>`+
//           "<button onclick ='addtocart("+(i++)+")'>Add To Cart</button>" +
//           `</div>
//           </div>`
//     )
//   }).join('')

 