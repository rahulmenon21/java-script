/* 1. Palindrome Number */

// var Num = prompt('Enter Numebr: ');
// function palindrome(Num) {
//     var len = Num.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (Num[i] !== Num[len - 1 - 1]) {
//             return "Its is not a palindrome"
//         }
//     }
//     return "It is a Palindrome"
// }
// var value = palindrome(Num);
// document.write(value)


/* 2. Withdraw Amt in Atm (Important) */

// var a = prompt("Enter Amount: ")
// function atm(a){
//     t=0,f=0,two=0,o=0
//     if (a>=2000){
//         t=parseInt(a/2000)
//         a=a%2000
//         document.write("2000 Notes is: ",t,"<br>")
//     }

//     if (a>=500){
//         f=parseInt(a/500)
//         a=a%500
//         document.write("500 Notes is: ",f,"<br>")
//     }

//     if (a>=200){
//         two=parseInt(a/200)
//         a=a%200
//         document.write("200 Notes is: ",two,"<br>")
//     }

//     if (a>=100){
//         o=parseInt(a/100)
//         a=a%100
//         document.write("100 Notes is: ",o,"<br>")
//     }

//     if (a<100){
//         document.write("Please Enter Amount Greater Than Hundred","<br>")
//     }

//     document.write("Your Current Amount Is: ",a)
// }

// atm(a)




function atm(){
    a=document.getElementById("a").value
    t=0,f=0,two=0,o=0
    if (a>=2000){
        t=parseInt(a/2000)
        a=a%2000
        document.getElementById("x").innerHTML=t
    }

    if (a>=500){
        f=parseInt(a/500)
        a=a%500
        document.getElementById("y").innerHTML=f
    }

    if (a>=200){
        two=parseInt(a/200)
        a=a%200
        document.getElementById("z").innerHTML=two
    }

    if (a<200){
        document.getElementById("b").innerHTML="Please Enter Amount Greater Than 200","<br>"
    }

    document.write("Your Current Amount Is: ",a)
}

atm(a)