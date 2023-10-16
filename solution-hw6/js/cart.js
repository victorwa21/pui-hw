document.addEventListener('DOMContentLoaded', function () {
    let orderCounter = -1;
    const rolls = {
        "Original": {
            "basePrice": 2.49,
            "imageFile": "original-cinnamon-roll.jpg"
        },
        "Apple": {
            "basePrice": 3.49,
            "imageFile": "apple-cinnamon-roll.jpg"
        },
        "Raisin": {
            "basePrice": 2.99,
            "imageFile": "raisin-cinnamon-roll.jpg"
        },
        "Walnut": {
            "basePrice": 3.49,
            "imageFile": "walnut-cinnamon-roll.jpg"
        },
        "Double-Chocolate": {
            "basePrice": 3.99,
            "imageFile": "double-chocolate-cinnamon-roll.jpg"
        },
        "Strawberry": {
            "basePrice": 3.99,
            "imageFile": "strawberry-cinnamon-roll.jpg"
        }    
    };

    const glazeArr = [
        {name:"Keep original", value: 0}, 
        {name:"Sugar milk", value: 0},
        {name:"Vanilla milk", value: 0.50},
        {name:"Double chocolate",value: 1.50},
        ]
        let packArr = [
            {num:1, value: 1}, {num:3, value: 3}, {num:6, value: 5}, {num:12, value: 10},
        ]

    let cart = JSON.parse(localStorage.getItem("storedcart")) || [];
    for(let i = 0; i<cart.length; i++){
        add(cart[i]);
    }

    function add(roll){
        let template = document.getElementById("cart-items");
        let clone = template.content.cloneNode(true);
        orderCounter++;
        let item = clone.querySelector("#item");
        item.setAttribute("data-order", parseInt(orderCounter));
        r = clone.querySelector("#roll");
        i = clone.querySelector("#rImage");
        p = clone.querySelector("#psize");
        g = clone.querySelector("#glaze");
        t = clone.querySelector("#totalp");
        i.src = '../assets/products/' + rolls[roll.type]["imageFile"];
        r.textContent = roll.type + " Cinnamon Roll";
        g.textContent = roll.glazing
        p.textContent = "Pack size: " + roll.size;
            
        let gl;
        let si;
        for (let i =0; i<4; i++){
            if (roll.glazing == glazeArr[i].name)
                gl = glazeArr[i].value;
        }
        for (let i =0; i<4; i++){
            if (roll.size == packArr[i].num)
                si = packArr[i].value;
        }
        total = (roll.basePrice + gl) *si;
        t.textContent = "$ " + total.toFixed(2);
        let c = document.getElementById("cart")
        c.appendChild(clone); 
    }
        
    document.getElementById("cart").addEventListener("click", function(event) {
        if (event.target.classList.contains("remove")) {
            let cartItem = event.target.closest(".cart-item");
            let itemPrice = cartItem.querySelector("#totalp");
            if (cartItem) {
                console.log(cart);
                cartItem.remove();
                cart.splice(cartItem.getAttribute("data-order"), 1);
                updateOrder();
                let p = itemPrice.textContent.split(" ");
                let price = parseFloat(p[1]);
                sum = sum - price;
                let totalPrice = document.getElementById("cart-total");
                totalPrice.textContent = "$ " + sum.toFixed(2);
                localStorage.setItem("storedcart", JSON.stringify(cart));

            }
        }
    });
    sum = 0;

    
    function updateOrder() {
        let cartItemsElements = document.querySelectorAll("#item");
        cartItemsElements.forEach(function(element, index) {
            element.setAttribute("data-order", index);
        });
    }

    let allRollElements = document.querySelectorAll('#totalp');
    allRollElements.forEach(function(element) {
        let textContent = element.textContent;
        let p = textContent.split(" ");
        let price = parseFloat(p[1]);
        sum += price;
    
    });
    let totalPrice = document.getElementById("cart-total");
    totalPrice.textContent = "$ " + sum.toFixed(2);
});
console.log(JSON.parse(localStorage.getItem("storedcart")));
