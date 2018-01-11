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

}
