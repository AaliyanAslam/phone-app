var cartContainer = document.querySelector(".container");
var cartItems = JSON.parse(localStorage.getItem("cartItems"));

// console.log(cartItems);

function rander() {
  cartContainer.innerHTML = "";

  cartContainer.innerHTML = `
      <button class="btn btn-primary delAllBtn " onclick ="delAllBtn()">Clear All</i></button>
  `;
  var totalPrice = 0;
  for (var i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].price * cartItems[i].quaintity;
    cartContainer.innerHTML += `
              <div class="card shadow-lg p-2 mb-2 w-100 rounded " style="width: 18rem;">
                  <div class="card-body bg-light border border-light text-dark ">
                    <h4 class="card-title">${cartItems[i].brand}</h4>
                    
 <div class="d-flex justify-content-between">
 
<div>
  <h4 class="card-subtitle mb-2">${cartItems[i].model} 
  <h4 class="card-subtitle mb-2">${cartItems[i].price}$
</div>
<div class="">
 <span class=" ms-5 text-dark fs-6 fw-bold">Qty :${cartItems[i].quaintity}X</span>
                   

  <button class="btn btn-primary fs-5 " onclick ="add(${i})">+</button> 
  <button class="btn btn-primary fs-5 "  onclick ="sub(${i})">-</button> 
   <button class="btn btn-primary fs-5"  onclick ="del(${i})"><i class="fa-solid fa-trash"></i></button></h4>

</div>


 </div>
 </div>
 </div> `;
    document.querySelector("h2").innerHTML = `Total Price: ${totalPrice}$`;
    if (cartContainer.innerHTML === "") {
      document.querySelector(".delAllBtn").style.display = "none";
    } else {
      document.querySelector(".delAllBtn").style.display = "block";
    }
  }
}
rander();
function add(index) {
  cartItems[index].quaintity++;
  rander();
}
function sub(index) {
  cartItems[index].quaintity--;
  if (cartItems[index].quaintity === 0) {
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  rander();
}

function del(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  rander();
}

function delAllBtn() {
  localStorage.removeItem("cartItems");
  var leatest = (cartItems = []);
  cartItems = [];
  document.querySelector("h2").innerHTML = `Total Price: $`;
  rander();
  document.querySelector(".delAllBtn").style.display = "none";
}

// var cards = document.querySelectorAll(".card");
// if(cartContainer.innerHTML === cards){
// document.querySelector(".delAllBtn").style.display = "block";

// }

var btn = document.getElementById("switchmode");
var mode = "light";
backIcon = document.querySelector("back-icon");

function switchmode() {
  if (mode === "light") {
    console.log("btn work");

    document.body.style.backgroundColor = "black";
    document.getElementById(
      "switchmode"
    ).innerHTML = `<i class="fa-regular fa-sun"></i>`;
    document.body.style.color = "white";
    btn.style.background = "white";

    mode = "dark";
  } else {
    if (mode === "dark") {
      document.getElementById(
        "switchmode"
      ).innerHTML = `<i class="fa-regular fa-moon"></i>`;
    }

    document.body.style.backgroundColor = "#dddddd70";
    document.body.style.color = "black";
    //  btn.style.background = "#dddddd70";

    mode = "light";
  }
}

btn.addEventListener("click", switchmode);

function back() {
  window.location = "index.html";
}
