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
		var input = document.querySelector('input');
		var phoneField = document.querySelector('.form').phone;
		var emailField = document.querySelector('.form').email;
		var messageField = document.querySelector('.form').message;
		var additionField = document.querySelector('.form').addition;
		var pswField = document.querySelector('.form').psw;
		var reenterpswField = document.querySelector('.form').reenterpsw;
		var formButton = document.querySelector('.form-button');
		var tooltipSend = document.getElementById('tooltipSend');
		var tooltipNumber = document.getElementById('tooltipNumber');
		var tooltipAdd = document.getElementById('tooltipAdd');
		var tooltipEmail = document.getElementById('tooltipEmail');
		var isOkEmail = true;
		var isOkAdd = true;
		var isOkPhone = true;
		console.log(input);
		function giveAtr(){
			input.focus();
		}
		window.addEventListener("scroll", giveAtr);

		function addNumber() {
			var num1 = Math.floor(Math.random() * 10);
			var num2 = Math.floor(Math.random() * 10);

			labelAdd.innerHTML = num1 + "+" + num2;

			additionField.onkeyup = function (e) {
				if (parseInt(additionField.value) === num1 + num2 && parseInt(additionField.value) != null) {
					isOkAdd = true;

				} else {
					isOkAdd = false;
				}
			}
		}
		addNumber();

		function addEmail() {
			emailField.onblur = function (e) {

				if (this.value && !(this.value.includes("@") && this.value.includes(".") && !this.value.includes(" "))) {
					isOkEmail = false;
					tooltipEmail.innerHTML = "Invalid email";
					console.log('małpa i kropka');
				} else {
					isOkEmail = true;
					console.log("ioppp");
					tooltipEmail.innerHTML = "";
				}
			}
		}
		addEmail();

		function enterNumber() {
			phoneField.onblur = function (e) {
				if (this.value && (e.which === 32 || isNaN(this.value))) { // 32 kod klawisza spacji
					tooltipNumber.innerHTML = "Invalid number";
					isOkPhone = false;

				} else {
					tooltipNumber.innerHTML = "";
					isOkPhone = true;
				}
			}
		}
		enterNumber();
		formButton.onclick = function (e) {
			if (!isOkEmail || !isOkPhone || !isOkAdd || reenterpswField.value != pswField.value) {
				e.preventDefault();
				tooltipSend.innerHTML = "Incorrect data";
			} else {
				tooltipSend.innerHTML = "";
			}

		}
	}
	validForm();


