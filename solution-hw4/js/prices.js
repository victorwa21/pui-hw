const newPrice = document.getElementById("finalp")
newPrice.innerHTML = "$ "+ +rolls[rollType]["basePrice"].toFixed(2)
let finalPrice;
let gPrice = 0;
let pPrice = 1;
const selectp = document.getElementById("pack size")
let packArr = [
  {num:1, value: 1}, {num:3, value: 3}, {num:6, value: 5}, {num:12, value: 10},
]

for (let i =0; i<4; i++){
  const optionElem = document.createElement("option");
  optionElem.value = packArr[i].value;
  optionElem.textContent = packArr[i].num;
  selectp.appendChild(optionElem)
}

const selectg = document.getElementById("glazingOptions")
const glazeArr = [
  {name:"Keep original", value: 0}, 
  {name:"Sugar milk", value: 0},
  {name:"Vanilla milk", value: 0.50},
  {name:"Double chocolate",value: 1.50},
    ]
for (let i =0; i<4; i++){
  const optionElem = document.createElement ("option");
  optionElem.value = glazeArr[i].value;
  optionElem.textContent = glazeArr[i].name;
  selectg.appendChild(optionElem)
}

function glazingChange(element){
  if(element.value ==0 || element.value ==0.50 || element.value ==1.50){
    gPrice = element.value;           
  }
  else{
    pPrice = element.value; 
    }
  finalPrice = (+rolls[rollType]["basePrice"] + +gPrice) * pPrice;
  newPrice.innerHTML = "$ "+ finalPrice.toFixed(2)               
}








