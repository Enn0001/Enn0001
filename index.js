<!-- const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")

function clickLike1(){
    let totalLikes1 = parseInt(countLikes1.value) + 1
    countLikes1.textContent = totalLikes1.toString()
  }
function clickLike2(){
    let totalLikes2 = parseInt(countLikes2.value) + 1
    countLikes2.textContent = totalLikes2.toString()
}
btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)

function DisLikes1() {
  let totalDisLikes1 = parseInt(countDisLikes1.value) + 1
   countDisLikes1.textContent = totalDisLikes1.toString()
}
btnDisLike1.addEventListener("click",DisLikes1)

function DisLikes2() {
  let totalDisLikes2 = parseInt(countDisLikes2.value) + 1
   countDisLikes2.textContent = totalDisLikes2.toString()
}
btnDisLike2.addEventListener("click",DisLikes2)

const comment = document.getElementById("comment")
const submit = document.getElementById("submit")
const commentbox = document.getElementById("commentbox")

function submitComment() {
   commentbox.textContent += comment.value.toString() + "\n"
    comment.value=""

}
submit.addEventListener("click",submitComment)
-->
<!--
 var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var product4 = document.getElementById("product4");
var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var product5 = document.getElementById("product5");
var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");

var product6 = document.getElementById("product6");
var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    carts.textContent = "";
    var totalPrice = 0;

    function addToCart(qty, price, product) {
        var order = qty.value + ' pc/s x ' + price.textContent + ' ------ ' + product.textContent + ' ------ Php ' + (parseFloat(qty.value) * parseFloat(price.textContent)) + '\n';
        carts.textContent += order;
        totalPrice += parseFloat(qty.value) * parseFloat(price.textContent);
    }

    if (parseFloat(qty1.value) > 0) addToCart(qty1, price1, product1);
    if (parseFloat(qty2.value) > 0) addToCart(qty2, price2, product2);
    if (parseFloat(qty3.value) > 0) addToCart(qty3, price3, product3);
    if (parseFloat(qty4.value) > 0) addToCart(qty4, price4, product4);
    if (parseFloat(qty5.value) > 0) addToCart(qty5, price5, product5);
    if (parseFloat(qty6.value) > 0) addToCart(qty6, price6, product6);

    total.value = '₱ ' + totalPrice.toFixed(2);
}

function calculateChange() {
    let totalPrice = parseFloat(total.value.replace('₱ ', ''));
    let cashTendered = parseFloat(cash.value);
    if (!isNaN(totalPrice) && !isNaN(cashTendered) && cashTendered >= totalPrice) {
        let changeAmount = cashTendered - totalPrice;
        change.value = '₱ ' + changeAmount.toFixed(2);
    } else {
        change.value = '';
    }
}

function BUYNOW() {
    let totalPrice = parseFloat(total.value.replace('₱ ', ''));
    let cashTendered = parseFloat(cash.value);
    if (cashTendered >= totalPrice) {
        alert('Thank you for your purchase. See you again!');
    } else {
        alert('Not enough balance');
    }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);

cash.addEventListener("keyup", calculateChange);

document.getElementById('buyNow').addEventListener('click', BUYNOW);

