let score=0
let current=0

const questions=[

{
q:"What is the probability that both balls are red?",
a:["2/9","1/5","5/9","1/2"],
c:0
},

{
q:"What is the probability that the first ball is blue and the second ball is green?",
a:["1/15","2/9","3/10","1/5"],
c:0
},

{
q:"What is the probability that at least one ball is green?",
a:["17/45","1/3","4/9","2/5"],
c:0
},

{
q:"If the first ball is red, what is the probability the second ball is red?",
a:["4/9","5/9","1/2","3/8"],
c:0
},

{
q:"Who is the Doctor?",
a:["Ana","Ben","Cara","Unknown"],
c:0
}

]

function showStart(){
document.getElementById("instructions").classList.add("hidden")
document.getElementById("startPage").classList.remove("hidden")
}

function startGame(){
document.getElementById("startPage").classList.add("hidden")
document.getElementById("gamePage").classList.remove("hidden")
loadQuestion()
}

function loadQuestion(){

document.getElementById("question").innerText=questions[current].q

let answers=""

questions[current].a.forEach((ans,i)=>{
answers+=`<button onclick="check(${i})">${ans}</button>`
})

document.getElementById("answers").innerHTML=answers

}

function check(i){

if(i===questions[current].c){

score++
document.getElementById("correct").play()

}else{

document.getElementById("wrong").play()

}

document.getElementById("score").innerText="Score: "+score

}

function nextQuestion(){

current++

if(current>=questions.length){

alert("Game Finished! Your Score: "+score+"/"+questions.length)
location.reload()
return

}

loadQuestion()

}
