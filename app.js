var phones = [
  {
    brand: "Samsung",
    model: "Galaxy",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 799,
  },
  {
    brand: "Apple",
    model: "iPhone 13",
    ram: 4,
    rom: 128,
    camera: "12 megapixel",
    price: 799,
  },
  {
    brand: "OnePlus",
    model: "9+",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 729,
  },
  {
    brand: "Google",
    model: "Pixel 6",
    ram: 8,
    rom: 128,
    camera: "50 megapixel",
    price: 599,
  },
  {
    brand: "Xiaomi",
    model: "Mi 11",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 749,
  },
  {
    brand: "Sony",
    model: "Xperia 1",
    ram: 12,
    rom: 256,
    camera: "12 megapixel",
    price: 1299,
  },
  {
    brand: "Oppo",
    model: "Find X3",
    ram: 12,
    rom: 256,
    camera: "50 megapixel",
    price: 1149,
  },
  {
    brand: "Vivo",
    model: "X60 Pro",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 999,
  },
  {
    brand: "Nokia",
    model: "G50",
    ram: 4,
    rom: 128,
    camera: "48 megapixel",
    price: 299,
  },
  {
    brand: "Motorola",
    model: "Edge 20",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 599,
  },
  {
    brand: "Realme",
    model: "GT",
    ram: 12,
    rom: 256,
    camera: "64 megapixel",
    price: 499,
  },
  {
    brand: "Asus",
    model: "ROG",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
  },
  {
    brand: "HTC",
    model: "Desire",
    ram: 8,
    rom: 128,
    camera: "48 megapixel",
    price: 399,
  },
  {
    brand: "Huawei",
    model: "P40",
    ram: 8,
    rom: 256,
    camera: "50 megapixel",
    price: 899,
  },
  {
    brand: "LG",
    model: "Wing",
    ram: 8,
    rom: 256,
    camera: "64 megapixel",
    price: 999,
  },
  {
    brand: "ZTE",
    model: "Axon 20",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 399,
  },
  {
    brand: "BlackBerry",
    model: "KEY2",
    ram: 6,
    rom: 64,
    camera: "12 megapixel",
    price: 649,
  },
  {
    brand: "Lenovo",
    model: "Legion 4",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
  },
  {
    brand: "Alcatel",
    model: "3L",
    ram: 4,
    rom: 64,
    camera: "48 megapixel",
    price: 199,
  },
  {
    brand: "TCL",
    model: "10 Pro",
    ram: 6,
    rom: 128,
    camera: "64 megapixel",
    price: 449,
  },
  {
    brand: "VigoTell",
    model: "1 Pro",
    ram: 2,
    rom: 32,
    camera: "4 megapixel",
    price: 129,
  },
];

var container = document.querySelector(".container");
var cartItem = [];
for (var i = 0; i < phones.length; i++) {
  container.innerHTML += `

        <div class="card shadow-lg p-2 mb-2" style="width: 18rem;">
            <div class="card-body bg-light border border-light text-dark">
              <h3 class="card-title">${phones[i].brand}</h3>
              <h5 class="card-subtitle mb-2  text-light">${phones[i].model}</h5>
              <h5 class="card-subtitle mb-2 ">${phones[i].price}$</h5>
              <button type="button" onclick ="addtocart(${i})" class="btn btn-primary">AddToCart</button>
              
            </div>
         `;
}

function addtocart(index) {
  var checkIndex = cartItem.indexOf(phones[index]);
  console.log(checkIndex);

  if (checkIndex === -1) {
    phones[index].quaintity = 1;
    cartItem.push(phones[index]);
    var cartItems = localStorage.setItem("cartItems", JSON.stringify(cartItem));
  } else {
    cartItem[checkIndex].quaintity += 1;
  }

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Item added to cart",
    showConfirmButton: false,
    timer: 1000,
  });
}

function gotocart() {
  // localStorage.setItem('cartItems' , JSON.stringify(cartItem));
  window.location.href = "cart.html";
  cartItems;
}

var btn = document.getElementById("switchmode");
var mode = "light";
var bootNavbar = document.querySelector(".boot-navbar");
function switchmode() {
  if (mode === "light") {
    // console.log("btn work");

    document.body.style.backgroundColor = "black";
    document.getElementById(
      "switchmode"
    ).innerHTML = `<i class="fa-regular fa-sun"></i>`;
    document.body.style.color = "white";
    btn.style.background = "white";
    bootNavbar.style.backgroundColor = "white";

    mode = "dark";
  } else {
    document.getElementById(
      "switchmode"
    ).innerHTML = `<i class="fa-regular fa-moon"></i>`;

    document.body.style.backgroundColor = "#dddddd70";
    // document.body.style.color = "black";

    mode = "light";
  }
}

btn.addEventListener("click", switchmode);
