/*1. --x-- How to write variable --x-- 
var a = 10
let b = 20
const c = 30
document.write(a,"<br>")
document.write(b,"<br>")
document.write(c,"<br>") */

/* var , let & Const
var a = 10
document.write(a,"<br>")

let b = 20
document.write(b)

const c = 30
document.write(c) */


/*2. --x-- Swap value --x-- 
var a = 10 , b = 20 , c = 0

c = a+b
a = c-a
b = c-b

document.write("value of a is:",a,"<br>")
document.write("value of b is:",b,"<br>") */


/*3. --x-- Diffrence of variable --x--
var a = 20
var a = 30
document.write(a,"<br")

let a = 10
 a = 20
document.write(a)

const a = 10
 a = 20
document.write(a) */


/*4. --x-- Scope in Variable --x--
var a = 10
{
    var a = 30
    // document.write(a)
}
document.write(a)

let a = 10
{
    let a = 20
    document.write(a)
}
document.write(a) */


/*5. --x-- There are 7 Datatype --x-- */
// 1. Numeric
// var a = 10
// document.write(typeof a)

// 2. String
// var a = "heyy rahul"
// document.write(typeof a)

// 3. Null (return object)
// var a = null
// document.write(typeof a)

// 4. Object (return object)  (similar to dictnary)
// var a = {x:'python' , y:'Java'}
// document.write(typeof a)

// 5. Array
// var a = [1,2,3,4]
// document.write(a[0])

// 6. Undefine
// var a
// document.write(typeof a)

// 7. Boolean
// var a = true
// document.write(typeof a)


/* 6. Calculator */
// a = prompt("Enter the Number")
// b = prompt("Enter the Operator")
// c = prompt("Enter the Number")
// a = Number(a)
// c = parseInt(c)
// if (b == "+")(document.write(a,b,b, "=" , a+c))
// else if (b == "-")(document.write(a,b,c, "=" , a-c))
// else if (b == "*")(document.write(a,b,c, "=" , a*c))
// else if (b == "/")(document.write(a,b,c, "=" , a/c))


/* 7. For Loop */
// for (var i = 1;i <= 10;i++){
//     document.write("heyy.rahul <br>")
// }


/* 8. While Loop */
// var i = 1
// while (i <= 10){
//     document.write("heyy","<br>")
//     i++
// }


/* 9. Switch Case */
// Month = 4

// switch (Month) {
//     case 1:
//         document.write("Jan")
//         break
//     case 2:
//         document.write("feb")
//         break
//     case 3:
//         document.write("mar")
//         break
//     case 4:
//         document.write("apr")
//         break
//     case 5:
//         document.write("may")
//         break
//     case 6:
//         document.write("Jun")
//         break
//     case 7:
//         document.write("Jul")
//         break
//     case 8:
//         document.write("aug")
//         break
//     case 9:
//         document.write("sep")
//         break
//     case 10:
//         document.write("oct")
//         break
//     case 11:
//         document.write("nov")
//         break
//     case 12:
//         document.write("dec")
//         break
//     default:
//         document.write("invalid syntax")
// }


/* 10. Prime Number in For loop. */
// a = []
// for (var i = 1; i <= 20; i++) {
//     var n = i
//     var c = 0
//     for (var j = 2; j < n; j++) {
//         if (n % j  == 0) {
//             c = c + 1
//         }
//     }
//     if (c==0){
//         a.push(n)
//     }
// }
// document.write(a)


/* 11. Arrays (similar to list (arrays start index number For e.g.(0,1,2,3) )) */
// a=["python","Java","Sql"]
// document.write(a[0])
// console.log(a)
// document.write(a.length)


/* 12. Even Number. */
// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i)
//     }
// }


/* 13. Withdraw Money. */
// a = prompt("Enter Amount: ")
// function atm(a) {
//     t = 0,f=0,two=0,one=0
//     if (a >= 2000) {
//         t = parseInt(a / 2000)
//         a = a % 2000
//         document.write("2000 Note is: ", t, "<br>")
//     }
//     if (a >= 500) {
//         f = parseInt(a/500)
//         a = a % 500
//         document.write("500 Note is: ",f, "<br>")
//     }
//     if (a >= 200) {
//         two = parseInt(a / 200)
//         a = a % 200
//         document.write("200 Note is: ",two, "<br>")
//     }
//     if (a >= 100) {
//         one = parseInt(a / 100)
//         a = a % 100
//         document.write("100 Note is: ",one, "<br>")
//     }
//     if (a < 100) {
//         document.write("Amount should be greater than 100","<br>")
//     }

//     document.write("Your Account Balance is: ",a)
// }

// atm(a)


/* 14. Account Balance */
// acc = 10000
// a = prompt("Enter Number: ")
// function atm(a) {
//     if (a <= acc) {
//         document.write("Thank You For Visiting")
//     }
//     else if (a > acc) {
//         document.write("Insufficient Balance")
//     }
//     else {
//         document.write("Cash Is Not Available")
//     }
// }

// atm(a)


/* 15. Counter */
// function changecolor() {
//     document.getElementById("rm").style.color="blue"
// }

// var c = 0
// function decrement() {
//     document.getElementById("counter").innerHTML = --c
// }
// function reset() {
//     c = 0
//     document.getElementById("counter").innerHTML = c
// }
// function increment() {
//     document.getElementById("counter").innerHTML = ++c
// }


/* Image */
imgc = 1
c1 = 0

function change() {
    if (imgc % c1 == 0) {
        imgc++
        c1--
        document.getElementById("img").src = "unlike.jpg"
        document.getElementById("p").innerHTML = c1
    }
    else {
        imgc--
        c1++
        document.getElementById("img").src = "like.jpg"
        document.getElementById("p").innerHTML = c1
    }
}


var a=10

{
    var a=30
    document.write(a)
}
// document.write(a)