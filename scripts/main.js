function test() {
    document.getElementsByClassName('left')[0].innerHTML += "<p>test</p>"
    console.log("scrolled!")
}

window.addEventListener("scroll", test)
window.onload = function () {
    

}