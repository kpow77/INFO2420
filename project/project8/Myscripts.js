
    var PrintButton1 = new Image();
    var PrintButton2 = new Image();
    var logo1 = new Image();
    var logo2 = new Image();

    if (document.images) {
        PrintButton1.src = "images/print5.gif";
        PrintButton2.src = "images/print6.gif";
        logo1.src = "images/logo1.jpg";
        logo2.src = "images/logo2.jpg";
    }

    var imgArray = [
        "Image1Lg.jpg",
        "Image2Lg.jpg",
        "Image3Lg.jpg",
        "Image4lg.jpg"
    ];

    var titleArray = [
        "Bald Eagle",
        "Group of Geese",
        "Heron",
        "2 Pelicans"
    ];

    var imgPath = "images/";

    function swapImage(imgID) {
        document.getElementById("theImage").src = imgPath + imgArray[imgID];
        document.getElementById("bottomText").innerHTML = titleArray[imgID];
    }

    function preloadImages() {
        for (var i = 0; i < imgArray.length; i++) {
            var tmpImg = new Image();
            tmpImg.src = imgPath + imgArray[i];
        }
    }

    window.onload = preloadImages;