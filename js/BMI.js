/**
 * JavaScript for IMC Calculation
 */ 
var BMI = {

	init: function() {
		BMI.setButton();
	},
	
	setButton: function() {
		var button = document.getElementById('btnCalculate');
		button.onclick = function() {
			BMI.calculate();
		};
	},
	
	calculate: function() {
		var height = parseFloat(document.getElementById('height').value);
		var weight = parseFloat(document.getElementById('weight').value);
		var result = document.getElementById('result');
		result.innerHTML = (weight / (height * height)).toFixed(2);
	}
	
};

//inicialization
window.onload = BMI.init;