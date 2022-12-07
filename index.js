let b1 = document.getElementById("home-score")
let b2 = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0
function button1(){
    homeScore += 1
    b1.textContent = homeScore
}
function button2(){
    homeScore +=2
    b1.textContent = homeScore
}
function button3(){
    homeScore += 3
    b1.textContent = homeScore
}
function button4(){
    guestScore += 1
    b2.textContent = guestScore
}
function button5(){
    guestScore +=2
    b2.textContent = guestScore
}
function button6 (){
    guestScore += 3
    b2.textContent = guestScore
}
function reset(){
    homeScore = 0
    guestScore = 0
    b1.textContent=0
    b2.textContent=0   
}
