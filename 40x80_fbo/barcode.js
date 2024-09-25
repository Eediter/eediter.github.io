document.getElementById("value").innerHTML = value;
// document.getElementById("name").innerHTML = name;

JsBarcode("#barcode", value, {
	format: "ean13",
	flat: true,
	displayValue: false,
	// width: 1.68,
	width: 2.3,
	height: 36,
	margin: 0
});