let adtToCartBtn = document.querySelectorAll(".btn");
let localStorageData = localStorage.getItem("ShoppinCart");
let local_arr = [];
let cartLength = document.getElementById("cartLength");

adtToCartBtn.forEach((btn) =>
btn.addEventListener("click", () => {
    let check;
    let btnParent = btn.parentElement;
    if(localStorageData) {
        local_arr = JSON.parse(localStorageData);
    }
    local_arr.forEach((data) => {
        if (data.id == btnParent.id) {
            check = true;
        }
    });

    if (check == true) {
        console.log("Product already in cart");
    } else {
        let product_obj = {
            id: btnParent,
            name:btnParent.querySelector("h4").innerText,
            description: btnParent.querySelector("p").innerText,
            image: btnParent.querySelector("img").getAttribute("src"),
        }; 
        local_arr.push(product_obj);
        localStorage.setItem("ShoppinCart", JSON.stringify (local_arr));
        console.log("Product added to cart!!!");
        cartLength.innerHTML = local_arr.length;
    }
})
)