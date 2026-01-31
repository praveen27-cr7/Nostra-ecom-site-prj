let search = document.getElementById('search');
let productsGrid = document.getElementById('products-grid');



let productItems = productsGrid.getElementsByTagName('div');
let h2s = productsGrid.getElementsByTagName('h2');

search.addEventListener('keyup', function(event) {
    let enteredValue = event.target.value.toUpperCase();
          for(let count = 0 ; count < h2s.length; count++){
            if(h2s[count].textContent.toUpperCase()
            .indexOf(enteredValue)<0){
                productItems[count].style.display = "none"; 
            }
            else{
                productItems[count].style.display = 'block'; 
            }
          }
})
