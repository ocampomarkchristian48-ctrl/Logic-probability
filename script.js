let score=0
let current=0
let timer
let time=10

const questions=[

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
a:["17/45","1/3","4/9","2/9"],
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
"Getting one blue and one green",
"They are equal"
],
c:0
}

]

function showStart(){

instructions.classList.add("hidden")
startPage.classList.remove("hidden")

}

function startGame(){

startPage.classList.add("hidden")
gameDesc.classList.remove("hidden")

}

function startQuestions(){

gameDesc.classList.add("hidden")
gameArea.classList.remove("hidden")

loadQuestion()

}

function startTimer(){

time=10
timerDiv.innerText=time

timer=setInterval(()=>{

time--

timerDiv.innerText=time

if(time<=0){

clearInterval(timer)
nextQuestion()

}

},1000)

}

function loadQuestion(){

clearInterval(timer)

let q=questions[current]

question.innerText=q.q

let html=""

q.a.forEach((ans,i)=>{

html+=`<button onclick="answer(${i})">${ans}</button>`

})

answers.innerHTML=html

progress.style.width=((current+1)/questions.length*100)+"%"

feedback.innerText=""

timerDiv=document.getElementById("timer")

startTimer()

}

function answer(i){

clearInterval(timer)

let q=questions[current]

if(i===q.c){

score++

feedback.innerText="✔"
feedback.style.color="green"

}else{

feedback.innerText="✖"
feedback.style.color="red"

}

scoreDiv=document.getElementById("score")
scoreDiv.innerText="Score: "+score

setTimeout(nextQuestion,800)

}

function nextQuestion(){

current++

if(current>=questions.length){

alert("Game Finished! Score: "+score)

location.reload()

return

}

loadQuestion()

}
