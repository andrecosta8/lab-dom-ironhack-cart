// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = price.innerText;
  const quantityValue = quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  const multiply = priceValue * quantityValue;
  subtotal.innerText = multiply;
  console.log(multiply);
  return  multiply;
  
}

// ITERATION 2
  

function calculateAll() {
  let totalSum = 0; 
  const products = document.querySelectorAll('.product'); 
  products.forEach((element)=> {
  totalSum += updateSubtotal(element); 
   
});

// ITERATION 3
  
  let total = document.querySelector('#total-value span');
  total.innerHTML = totalSum;

}

  
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.forEach((event) => {
    event
  });

  
  
  
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}



  window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
