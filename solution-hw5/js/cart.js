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

    let sCart = [];
    class Roll {
        constructor(rollType, rollGlazing, packSize, rollPrice) {
            this.type = rollType;
            this.glazing =  rollGlazing;
            this.size = packSize;
            this.basePrice = rollPrice;
        }
    }
    r1 = new Roll('Original', 'Sugar milk', 1, 2.49)
    r2 = new Roll('Walnut', 'Vanilla milk', 12, 3.49)
    r3 = new Roll('Raisin', 'Sugar milk', 3, 2.99)
    r4 = new Roll('Apple', 'Keep original', 3, 3.49)
    sCart[0] = r1;
    sCart[1] = r2;
    sCart[2] = r3;
    sCart[3] = r4;
    console.log(sCart);

    for(let i = 0; i<sCart.length; i++){
        add(sCart[i]);
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
                cartItem.remove();
                sCart.splice(cartItem.getAttribute("data-order"), 1);
                console.log(sCart);
                updateOrder();
                let p = itemPrice.textContent.split(" ");
                let price = parseFloat(p[1]);
                sum = sum - price;
                let totalPrice = document.getElementById("cart-total");
                totalPrice.textContent = "$ " + sum.toFixed(2);

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
