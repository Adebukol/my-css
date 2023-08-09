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
  const closeOverlay = document.getElementById('close-thumbail');
  console.log(closeOverlay);
  // closeOverlay.addEventListener("click", function(){
  //   overlay.style.display = 'none';
  // })
  const showOverlay = document.querySelectorAll(".product-thumbnail");
  
  //.addEventListener("click", myOverlay);
  function myOverlay(showOverlay){
    overlay.style.display = "block";
  }
 
// js for product details page----------------------------------
const productImg = document.getElementById("product-img");
const thumbnail= document.getElementsByClassName("product-overlay");
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('previousBtn');


nextButton.onclick = function(){
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

 