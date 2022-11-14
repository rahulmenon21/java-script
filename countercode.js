// function changecolor() {
//     document.getElementById("rm").style.color="blue"
// }

var c = 0
function decrement() {
    document.getElementById("counter").innerHTML = --c
}

function reset() {
    c = 0
    document.getElementById("counter").innerHTML = c
}

function increment() {
    document.getElementById("counter").innerHTML = ++c
}


imgc = 1 
c1 = 0

function change() {
    if (imgc % c == 0) {
        imgc++
        c1--
        document.getElementById("img").scr = "unlike.jpg"
        document.getElementById("p").innerHTML = c1
    }
    else {
        imgc--
        c1++
        document.getElementById("img").scr = "likee.jpg"
        document.getElementById("p").innerHTML = c1
    }
}