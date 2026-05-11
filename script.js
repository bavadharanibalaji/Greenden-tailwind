// JavaScript for side navigation menu
let sidenav = document.getElementById("sidenav");
let menuicon = document.getElementById("menuicon");
let closebtn = document.getElementById("close-nav");

menuicon.addEventListener("click", ()=>{
    sidenav.style.right = "0";
});

closebtn.addEventListener("click", ()=>{
    sidenav.style.right = "-50%";
});

// JavaScript for search functionality

let productContainer = document.getElementById("product-container");
let search = document.getElementById("search");
let productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup", ()=>{
    let enteredValue = event.target.value.toUpperCase()

    for(let count=0; count<productlist.length; count++){

        let productName = productlist[count].querySelector("h1").innerText.toUpperCase();

        if(productName.indexOf(enteredValue) < 0){
            productlist[count].style.display = "none";
        }else{
            productlist[count].style.display = "block";
        }
    }
})