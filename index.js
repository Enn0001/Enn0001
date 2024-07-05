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
<!-- var product1 = document.getElementById("product1")
            var qty1 = document.getElementById("qty1")
            var price1 = document.getElementById("price1")

            var product2 = document.getElementById("product2")
            var qty2 = document.getElementById("qty2")
            var price2 = document.getElementById("price2")
 
            var product3 = document.getElementById("product3")
            var qty3 = document.getElementById("qty3")
            var price3 = document.getElementById("price3")


            var carts = document.getElementById("carts")
            var total = document.getElementById("total")
            var cash = document.getElementById("cash")
            var change = document.getElementById("change")

            function addOrder() {
                carts.textContent=""
                if (parseFloat(qty1.value) > 0){
                    var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + '------'+ product1.textContent + '------ Php' + (parseFloat(qty1.value)*parseFloat(price1.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
                }
                if (parseFloat(qty2.value) > 0){
                    var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + '------' + product2.textContent + '------ Php' + (parseFloat(qty2.value)*parseFloat(price2.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
            }
                
                if (parseFloat(qty3.value) > 0){
                    var order = qty3.value.toString() + ' pc/s x ' + price3.textContent + '------' + product3.textContent + '------ Php' + (parseFloat(qty3.value)*parseFloat(price3.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
                
            }
                
                if (parseFloat(qty4.value) > 0){
                    var order = qty4.value.toString() + ' pc/s x ' + price4.textContent + '------' + product4.textContent + '------ Php' + (parseFloat(qty4.value)*parseFloat(price4.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
                
            }
                   
                if (parseFloat(qty5.value) > 0){
                    var order = qty5.value.toString() + ' pc/s x ' + price5.textContent + '------' + product5.textContent + '------ Php' + (parseFloat(qty3.value)*parseFloat(price5.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
                
            }
                if (parseFloat(qty6.value) > 0){
                    var order = qty6.value.toString() + ' pc/s x ' + price6.textContent + '------' + product6.textContent + '------ Php' + (parseFloat(qty6.value)*parseFloat(price6.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
            }
            }
                
            qty1.addEventListener("keyup", addOrder);
            qty2.addEventListener("keyup", addOrder);
            qty3.addEventListener("keyup", addOrder);
            qty4.addEventListener("keyup", addOrder);
            qty5.addEventListener("keyup", addOrder);
            qty6.addEventListener("keyup", addOrder);
-->
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

    function addOrderItem(qtyElem, priceElem, productElem) {
        var qty = parseFloat(qtyElem.value);
        if (qty > 0) {
            var price = parseFloat(priceElem.textContent);
            var product = productElem.textContent;
            var order = qty.toString() + ' pc/s x ' + price.toFixed(2) + ' ------ ' + product + ' ------ Php ' + (qty * price).toFixed(2) + '\n';
            carts.textContent += order;
            totalPrice += qty * price;
        }
    }

    addOrderItem(qty1, price1, product1);
    addOrderItem(qty2, price2, product2);
    addOrderItem(qty3, price3, product3);
    addOrderItem(qty4, price4, product4);
    addOrderItem(qty5, price5, product5);
    addOrderItem(qty6, price6, product6);

    total.textContent = 'Total: Php ' + totalPrice.toFixed(2);
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);

