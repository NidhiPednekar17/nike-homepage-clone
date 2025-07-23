let cartItems = [];
let cartCount = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;

  alert(`${productName} added to cart!`);
  console.log(cartItems); // You can check the cart in browser console
}
