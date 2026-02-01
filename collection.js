let search = document.getElementById('search');
let productsGrid = document.getElementById('products-grid');



let productItems = productsGrid.getElementsByTagName('div');
let h2s = productsGrid.getElementsByTagName('h2');
let noItemsMessage = document.getElementById('no-items-message');

search.addEventListener('keyup', function(event) {
    let enteredValue = event.target.value.toUpperCase();
          for(let count = 0 ; count < h2s.length; count++){
            if(h2s[count].textContent.toUpperCase()
            .indexOf(enteredValue)<0){
                productItems[count].style.display = "none"; 
                noItemsMessage.style.display = 'block';  
            }
            else{
                productItems[count].style.display = 'block';       
                noItemsMessage.style.display = 'none';}
          }
})


  const checkboxes = document.querySelectorAll(".filter");
  const shirts = document.querySelectorAll(".shirt");

  checkboxes.forEach(cb => cb.addEventListener("change", filterProducts));

  function filterProducts() {
    const selected = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    shirts.forEach(shirt => {
      const categories = shirt.dataset.category.split(" ");

      // show if ANY selected category matches
      const match =
        selected.length === 0 ||
        selected.some(cat => categories.includes(cat));

      shirt.style.display = match ? "block" : "none";
    });
  }
