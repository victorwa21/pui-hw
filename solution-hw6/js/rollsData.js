

let basePrice = 0;
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



const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
const heading = document.getElementById('prod-head');
const img = document.getElementById('image');


if (rolls.hasOwnProperty(rollType)){
    heading.textContent = rollType + " Cinnamon Roll";
    img.src = '../assets/products/' + rolls[rollType]["imageFile"];
    img.alt = rollType + " Cinnamon Roll"
    basePrice = rolls[rollType]["basePrice"];
}

document.addEventListener('DOMContentLoaded', function () {
    if (typeof localStorage == 'undefined') {
        const cart =[];
        localStorage.setItem("storedcart", JSON.stringify(cart));
    }

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}
let newRoll;
document.getElementById("addcart").addEventListener("click", function(){
    const selIndg = selectg.selectedIndex;
    const selIndp = selectp.selectedIndex;
    newRoll = new Roll(rollType, selectg.options[selIndg].text, selectp.options[selIndp].text, rolls[rollType]["basePrice"]);
    let storedcart = JSON.parse(localStorage.getItem("storedcart"));
    storedcart.push(newRoll);
    localStorage.setItem("storedcart", JSON.stringify(storedcart));
    console.log(storedcart);
});

});









   





