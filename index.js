const root = document.getElementById("root");

const menu = ["Home", "About", "Contact", "Products", "Login", "Cart"];

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Description 1",
    featured: true,
    image: "https://via.placeholder.com/150",
  },
];

function nav(menu) {
  const navBar = document.createElement("nav");
  for (let item in menu) {
    const a = document.createElement("a");
    a.innerHTML = menu[item];
    navBar.appendChild(a);
  }

  return navBar;
}

function hero() {
  let hero = document.createElement("div");
  hero.className = "hero";
  let h1 = document.createElement("h1");
  h1.innerHTML = "Welcome to the store";
  hero.appendChild(h1);
  return hero;
}

function featuredProducts(products) {
  let featured = document.createElement("div");
  featured.className = "featured";
  let h2 = document.createElement("h1");
  h2.innerHTML = "Featured Products";
  featured.appendChild(h2);
  const productContainer = document.createElement("div");
  productContainer.className = "grid";
  products.forEach(function (product) {
    const productContainer = document.createElement("div");
    productContainer.className = "product";
    const productImage = document.createElement("img");
    productImage.src = "product.image";
    productContainer.appendChild(productImage);
  });
  featured.appendChild(productContainer);
  return featured;
}

function footer() {
  let footer = document.createElement("footer");
  footer.className = "footer";
  let p = document.createElement("p");
  p.innerHTML = "Shopping &copy; 2022";
  footer.appendChild(p);
  return footer;
}
root.appendChild(nav(menu));
root.appendChild(hero());
root.appendChild(featuredProducts());
root.appendChild(productContainer());
root.appendChild(footer());
