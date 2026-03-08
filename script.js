let score = 0
let current = 0
let stage = 1

const questions1 = [

{
q:"1️⃣ What is the probability that both balls are red?",
a:["2/9","1/5","5/9","1/2"],
c:0
},

{
q:"2️⃣ What is the probability that the first ball is blue and the second ball is green?",
a:["1/15","1/9","3/10","2/5"],
c:0
},

{
q:"3️⃣ What is the probability that at least one ball is green?",
a:["17/45","1/3","2/9","4/9"],
c:0
},

{
q:"4️⃣ If you picked a red ball first, what is the probability the second ball is also red?",
a:["4/9","5/9","1/2","1/3"],
c:0
},

{
q:"5️⃣ Which is more likely?",
a:[
"Getting two red balls",
"Getting one blue and one green (any order)",
"They are equal"
],
c:0
}

]

const questions2 = [

{
q:"Ana = ?",
a:["Doctor","Teacher","Engineer"],
c:0
},

{
q:"Ben = ?",
a:["Engineer","Teacher","Doctor"],
c:0
},

{
q:"Cara = ?",
a:["Teacher","Doctor","Engineer"],
c:0
}

]

function nextToStart(){
document.getElementById("instructions").classList.add("hidden")
document.getElementById("startPage").classList.remove("hidden")
}

function startGame(){
document.getElementById("startPage").classList.add("hidden")
document.getElementById("game1desc").classList.remove("hidden")
}

function startQuestions(){
document.getElementById("game1desc").classList.add("hidden")
document.getElementById("gameArea").classList.remove("hidden")
loadQuestion()
}

function startGame2(){
document.getElementById("game2desc").classList.add("hidden")
document.getElementById("gameArea").classList.remove("hidden")
current = 0
stage = 2
loadQuestion()
}

function loadQuestion(){

let q

if(stage === 1){
q = questions1[current]
}else{
q = questions2[current]
}

document.getElementById("question").innerText = q.q

let ansHTML=""

q.a.forEach((ans,i)=>{
ansHTML += `<button onclick="check(${i})">${ans}</button>`
})

document.getElementById("answers").innerHTML = ansHTML
}

function check(i){

let q

if(stage===1){
q=questions1[current]
}else{
q=questions2[current]
}

if(i===q.c){
score++
}

document.getElementById("score").innerText="Score: "+score
}

function nextQuestion(){

current++

if(stage===1 && current>=questions1.length){

document.getElementById("gameArea").classList.add("hidden")
document.getElementById("game2desc").classList.remove("hidden")

return
}

if(stage===2 && current>=questions2.length){

alert("Game Finished! Final Score: "+score)
location.reload()
return
}

loadQuestion()

}
