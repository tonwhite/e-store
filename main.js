const tshirts = [
  // Add 18 T-shirt objects with id, name, imageUrl, and price properties
  {
    id: 1,
    name: 'T-shirt 1',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 19.99,
  },
  {
    id: 2,
    name: 'T-shirt 2',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 24.99,
  },
  {
    id: 3,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 4,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 5,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 6,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 7,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 8,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 9,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 10,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 11,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 12,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 13,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 14,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 15,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 16,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 17,
    name: 'T-shirt 3',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
  {
    id: 18,
    name: 'T-shirt 18',
    imageUrl: 'https://via.placeholder.com/150x200',
    price: 29.99,
  },
];

const cartCount = document.getElementById('cartCount');
const cartPopup = document.getElementById('cartPopup');
const cartItems = document.getElementById('cartItems');
const tshirtList = document.getElementById('tshirtList');

let cart = [];

function displayTshirts() {
  tshirtList.innerHTML = tshirts
    .map(
      (tshirt, index) => `
    <div class="tshirt" id="tshirt-${index}">
      <img src="${tshirt.imageUrl}" alt="${tshirt.name}">
      <h2>${tshirt.name}</h2>
      <p>$${tshirt.price.toFixed(2)}</p>
      <button onclick="addToCart(${index})">Add to cart</button>
    </div>
  `
    )
    .join('');
}

function addToCart(index) {
  const tshirt = tshirts[index];
  const tshirtElement = document.getElementById(`tshirt-${index}`);

  // Add T-shirt to cart logic
  const cartItemIndex = cart.findIndex((item) => item.tshirt.id === tshirt.id);
  if (cartItemIndex > -1) {
    cart[cartItemIndex].quantity += 1;
  } else {
    cart.push({ tshirt, quantity: 1 });
  }
  updateCartCount();

  // Add to cart effect
  const imgElement = tshirtElement.querySelector('img');
  const imgClone = imgElement.cloneNode(true);
  imgClone.style.position = 'absolute';
  imgClone.style.top = '0';
  imgClone.style.left = '0';
  imgClone.style.transform = 'translate(-50%, -50%)';
  imgClone.style.transition = 'all 1s ease';

  tshirtElement.appendChild(imgClone);

  setTimeout(() => {
    imgClone.style.transform = `translate(${
      cart.getBoundingClientRect().left -
      imgElement.getBoundingClientRect().left
    }px, ${
      cart.getBoundingClientRect().top - imgElement.getBoundingClientRect().top
    }px)`;
    imgClone.style.opacity = 0;
  }, 10);

  setTimeout(() => {
    tshirtElement.removeChild(imgClone);
  }, 1000);
}

function toggleCartPopup() {
  cartPopup.classList.toggle('open');
  displayCartItems();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.innerText = count;
}

function displayCartItems() {
  cartItems.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.tshirt.imageUrl}" alt="${item.tshirt.name}">
      <h3>${item.tshirt.name}</h3>
      <p>Qty: ${item.quantity}</p>
    </div>
  `
    )
    .join('');
}

function checkout() {
  // Implement checkout logic here
}

displayTshirts();

// Update the addToCart function
function addToCart(index) {
  const tshirt = tshirts[index];
  const tshirtElement = document.getElementById(`tshirt-${index}`);

  // Add T-shirt to cart logic
  const cartItemIndex = cart.findIndex((item) => item.tshirt.id === tshirt.id);
  if (cartItemIndex > -1) {
    cart[cartItemIndex].quantity += 1;
  } else {
    cart.push({ tshirt, quantity: 1 });
  }
  updateCartCount();

  // Add to cart effect
  const imgElement = tshirtElement.querySelector('img');
  const imgClone = imgElement.cloneNode(true);
  imgClone.style.position = 'absolute';
  imgClone.style.top = '0';
  imgClone.style.left = '0';
  imgClone.style.transform = 'translate(-50%, -50%)';
  imgClone.style.transition = 'all 1s ease';

  tshirtElement.appendChild(imgClone);

  setTimeout(() => {
    imgClone.style.transform = `translate(${
      cart.getBoundingClientRect().left -
      imgElement.getBoundingClientRect().left
    }px, ${
      cart.getBoundingClientRect().top - imgElement.getBoundingClientRect().top
    }px)`;
    imgClone.style.opacity = 0;
  }, 10);

  setTimeout(() => {
    tshirtElement.removeChild(imgClone);
  }, 1000);
}

// Add the filter functionality
const filterForm = document.getElementById('filterForm');

filterForm.addEventListener('change', () => {
  const selectedPrice = filterForm.price.value;

  const filteredTshirts = tshirts.filter((tshirt) => {
    if (selectedPrice === 'all') return true;
    if (selectedPrice === 'low') return tshirt.price <= 20;
    if (selectedPrice === 'medium')
      return tshirt.price > 20 && tshirt.price <= 30;
    if (selectedPrice === 'high') return tshirt.price > 30;
  });

  displayTshirts(filteredTshirts);
});

function displayTshirts(filteredTshirts = tshirts) {
  tshirtList.innerHTML = filteredTshirts
    .map(
      (tshirt, index) => `
    <div class="tshirt" id="tshirt-${tshirts.indexOf(tshirt)}">
      <img src="${tshirt.imageUrl}" alt="${tshirt.name}">
      <h2>${tshirt.name}</h2>
      <p>$${tshirt.price.toFixed(2)}</p>
      <button onclick="addToCart(${tshirts.indexOf(
        tshirt
      )})">Add to cart</button>
    </div>
  `
    )
    .join('');
}

displayTshirts();
