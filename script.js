window.onload = function () {
	function myFunction() {
		var slide = document.getElementsByClassName("carousel-slide");
		var item = 0;
		var indicators = document.getElementsByClassName("indicator");

		setInterval(function () {

			if (item > slide.length - 1) {
				item = 0;
			}
			if (item < 0) {
				item = 3;
			}
			for (var i = 0; i < slide.length; i++) {

				slide[i].style.display = "none";
				slide[item].style.display = "block";
			}

			for (var j = 0; j < indicators.length; j++) {
				indicators[j].style.backgroundColor = "#fff";
				indicators[item].style.backgroundColor = "red";
			}
			item++;

		}, 3000);
	}

	myFunction();

	function validForm() {
		var labelAdd = document.querySelector('#labelAdd');
		var phoneField = document.querySelector('.form').phone;
		var emailField = document.querySelector('.form').email;
		var messageField = document.querySelector('.form').message;
		var additionField = document.querySelector('.form').addition;
		var formButton = document.querySelector('.form-button');
		var tooltipSend = document.getElementById('tooltipSend');
		var tooltipNumber = document.getElementById('tooltipNumber');
		var tooltipAdd = document.getElementById('tooltipAdd');
		var isOk = true;
		var intAddNumber = parseInt(additionField.value);

		function addNumber() {
			var num1 = Math.floor(Math.random() * 10);
			var num2 = Math.floor(Math.random() * 10);
			console.log(num1 + num2);

			labelAdd.innerHTML = num1 + "+" + num2;

			additionField.onkeyup = function (e) {
				if (parseInt(additionField.value) === num1 + num2 && parseInt(additionField.value) != null) {
					console.log("jest ok");
					isOk = true;

				} else {
					isOk = false;
					console.log("jest none");
				}
			}
		}
		addNumber();
		phoneField.onkeyup = function (e) {
			if (this.value === "" || isNaN(this.value)) {
				tooltipNumber.innerHTML = "Invalid number";
				isOk = false;

			} else {
				tooltipNumber.innerHTML = "";
				isOk = true;
			}
		}
		formButton.onclick = function (e) {
			if (!isOk) {
				e.preventDefault();
				tooltipSend.innerHTML = "Incorrect data";
			} else {
				tooltipSend.innerHTML = "";
			}

		}

	}
	validForm();

}
