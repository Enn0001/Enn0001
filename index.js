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
document.addEventListener('DOMContentLoaded', function() {
    var products = [];
    for (let i = 1; i <= 6; i++) {
        products.push({
            product: document.getElementById("product" + i),
            qty: document.getElementById("qty" + i),
            price: document.getElementById("price" + i)
        });
    }

    var carts = document.getElementById("carts");
    var total = document.getElementById("total");
    var cash = document.getElementById("cash");
    var change = document.getElementById("change");

    function addOrder() {
        carts.textContent = "";
        var totalPrice = 0;

        products.forEach(function(item) {
            var qtyValue = parseFloat(item.qty.value);
            var priceValue = parseFloat(item.price.textContent);

            if (qtyValue > 0) {
                var order = `${qtyValue} pc/s x ${item.price.textContent} ------ ${item.product.textContent} ------ Php ${(qtyValue * priceValue).toFixed(2)}\n`;
                carts.textContent += order;
                totalPrice += qtyValue * priceValue;
            }
        });

        total.value = '₱ ' + totalPrice.toFixed(2);
        calculateChange(); // Update change whenever the order is updated
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

    products.forEach(function(item) {
        item.qty.addEventListener("keyup", addOrder);
    });

    cash.addEventListener("keyup", calculateChange);

    document.getElementById('buyNow').addEventListener('click', BUYNOW);
});

