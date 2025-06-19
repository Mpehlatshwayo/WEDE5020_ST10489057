
//click able images section
// This block waits for the DOM to fully load before running
document.addEventListener('DOMContentLoaded', function () {

    const searchBtn = document.getElementById( 'search-btn') ;
    const searchBox = document.getElementById ('search-box');

// Toggle the "active" class when the search button is clicked
    searchBtn.addEventListener('click', () => {
        searchBox.classList.toggle('active');
    });

});


document.addEventListener("DOMContentLoaded", ( ) => {
  const modal = document.getElementById( "imgModal");
  const modalImg = document.getElementById ("modalImg");
  const closeBtn = document.querySelector (".close");
 // Make all product images clickable
  document.querySelectorAll (" .col-4 img").forEach(img => {
    img.style.cursor = "pointer";


    // When an image is clicked, display it in the modal
    img.addEventListener("click", ( )=> {
      
        modal.style.display = "block";
      modalImg.src = img.src;

     });

  });

  closeBtn.addEventListener("click" , () => {
    modal.style.display = "none";
  });

  window.addEventListener("click" , (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }

    });

});

//form section
  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    
    message.textContent = "Your message has been sent successfully!";
    message.style.display = "block";

    // refresh form
    form.reset();

    // stop showing message after 5 min
    setTimeout(() => {
      message.style.display = "none";
    }, 5000);
  });

});
//searches for webpages
function searchPage() {
  const input = document.getElementById("search-input");
  const query = input.value.trim().toLowerCase();
   if (window.location.pathname.includes("products")) {
    searchProducts(query);
    return;
   }
  //  keywords to search
  const pages = {
    "home": "index.html",
    "products": "products.html",
    "contact": "contact.html",
    "about": "about.html",
    "blog": "blog.html"
  };
//loop that helps search keywords
  for (let keyword in pages) {
    if (keyword.includes(query)) {

      window.location.href = pages[keyword];

      return;
    }
  }

  //displays message if keyword is incorrect
  alert("Please search for the correct webpage.Item not found for: " + query);
}

//
function toggleMenu( ) {

  const navList = document.querySelector(".navbar ul");
  navList.classList.toggle("show");


}
//Help to search for products
function searchProducts(query) {
  const products = document.querySelectorAll(".product");
  let found = false;

  products.forEach( product => {
    // Get product name
    const name = product.querySelector("h4")?.textContent.toLowerCase();
   
    if (name && name.includes(query)) {

      // Show matching product
      product.style.display = "block";
      found = true;
    }
    // Hide product that does not matching product
     else {
      product.style.display = "none";
    }


  });
//displays message if product is not found
  if (!found) {

    alert("No matching product found for: " + query);
  }
}





