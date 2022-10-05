function test() {
    //document.getElementsByClassName('left')[0].innerHTML += "<p>test</p>"
    console.log("scrolled!")
}

window.onload = function () {

    document.getElementsByClassName('right')[0].addEventListener("scroll", test)
}