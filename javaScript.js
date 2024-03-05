window.addEventListener("scroll", function () {
    var header = document.getElementById("myHeader");
    var logo = document.getElementById("logo");
    var languageText = document.getElementById("languageText");
    var menuIcon = document.getElementById("menuIcon");

    if (window.scrollY > 50) {
        header.style.backgroundColor = "#ffff";
        logo.src = "img/Cyg-red.png";
        languageText.style.color = "black";
        menuIcon.style.color = "black";
    }
    else {
        header.style.backgroundColor = "#ff000000";
        logo.src = "img/CYG icon.png";
        languageText.style.color = "white";
        menuIcon.style.color = "white";
    }
});
