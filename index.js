import {storeProduct} from "./data.js"
let orderList = [] 
let totalBills = 0
let productToDisplay = ""
let completedPurchase = false

const cancelPayment = document.getElementById("cancel")
const mealCheque =document.getElementById("meal-cheque")
const payBills = document.getElementById("pay-bills")
const selectedMeals = document.getElementById("all-selected-meals")
const productListing = document.getElementById("product-listing")
const paymentForm = document.getElementById("payment-details")
const compliment = document.getElementById("complimentary")
const orderCart = document.getElementById("cart")


function buildCart(value){
    selectedMeals.innerHTML = ""
    totalBills = 0
   
    value.forEach(function(element){
        selectedMeals.innerHTML += `
        <div class="order space-between">
            <div class="item-order">
                <h1 class="label">${element.mealName}</h1>
                <button class="remove-btn" id="remove-meal" data-remove="${element.removalUuid}">remove</button>
            </div>
            <div class="item-price label">$${element.mealPrice}</div>
        </div>
        ` 
    totalBills += element.mealPrice
})
    }


function removeFromScreen(element){
    element.classList.add("undisplay")
}

function render(){
    productListing.innerHTML = productToDisplay
}

storeProduct.forEach(function(product){
    productToDisplay += `
    <div class="flex">
            <div class="without-add-btn">
                <img src=${product.productImg} class="product-img display">
                <div class="product-details">
                    <h1 class="product-name display">${product.mealName}</h1>
                    <p class="product-flavors display">${product.ImportantDetails}</p>
                    <strong class="product-price display">$${product.mealPrice}</strong>
                </div>
            </div>
            <div class="add" data-add="${product.uuid}" id="add">+</div>
    </div>
    `
})


document.addEventListener("click", function(e){
    if(e.target.dataset.add){
        if(!completedPurchase){
   const meal = storeProduct.filter(function(meals){
       return e.target.dataset.add === meals.uuid
    })[0] 
    orderList.push(meal) 
    
    orderCart.classList.remove("undisplay")
}
else{
    removeFromScreen(orderCart)
}
    }
    else if(e.target.dataset.remove){
       let itemToRemove =  orderList.filter(()=>{
            return orderList.removalUuid === e.target.dataset.remove
        }
        )
        orderList.splice(itemToRemove, 1)
        }
    if(!completedPurchase){
    buildCart(orderList)
    document.getElementById("total-price").innerHTML = `$${totalBills}`
}
    }
)

mealCheque.addEventListener("click", ()=>{
    if(totalBills > 0){
        paymentForm.classList.remove("undisplay")
    }
})

cancelPayment.addEventListener("click", ()=>{
    removeFromScreen(paymentForm)
})

payBills.addEventListener("click", ()=>{
    removeFromScreen(paymentForm)
    removeFromScreen(orderCart)
    removeFromScreen(mealCheque)
    compliment.classList.remove("undisplay")
    completedPurchase = true
})


render()
