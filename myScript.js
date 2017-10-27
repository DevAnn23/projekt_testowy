document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        console.log("DOM został wczytany");
         console.log("Hello!");
    }
}

function myFunction() {
    document.getElementById("demo").innerHTML = "000 000 000";
}

 window.alert("Dziekuje za odwiedzenie mojej strony :)");
