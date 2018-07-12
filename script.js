var adding = document.querySelector('#adding');
var subtract = document.querySelector('#subtract');
var copies = document.querySelector('#copies');
var amount = document.querySelector('#amount');
var val = 1;
var subtotal = 5 * val;

adding.addEventListener("click", function() {
	val = val + 1;
	copies.value = val;
	subtotal = 5 * copies.value;
	amount.textContent = subtotal;
});

subtract.addEventListener("click", function() {
	if(val > 1){
		val = val - 1;
		copies.value = val;
		subtotal = 5 * copies.value;
		amount.textContent = subtotal;
	}
});
