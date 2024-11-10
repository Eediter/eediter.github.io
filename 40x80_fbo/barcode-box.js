document.getElementById("value").innerHTML = value;
// document.getElementById("name").innerHTML = name;

JsBarcode("#barcode", value, {
	format: "ean13",
	flat: true,
	displayValue: false,
	width: 2.1,
	height: 90,
	margin: 0
});