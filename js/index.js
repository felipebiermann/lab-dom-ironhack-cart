// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let subtotalResult = Number(price) * Number(quantity);
  product.querySelector('.subtotal span').textContent = subtotalResult;
  console.log(subtotalResult);
  return subtotalResult;

  //console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let result = 0;
  const products = document.querySelectorAll('.product');

  for (let product of products) {
    result += updateSubtotal(product);
  }

  document.querySelector('#total-value span').textContent = result;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  //... your code
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
