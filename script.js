let score=0
let current=0
let stage=1
let timer
let time=10
let player=""

const q1=[

{q:"1️⃣ Probability both balls are red?",a:["2/9","1/5","5/9","1/2"],c:0},

{q:"2️⃣ Probability first blue then green?",a:["1/15","1/9","3/10","2/5"],c:0},

{q:"3️⃣ Probability at least one green?",a:["17/45","1/3","2/9","4/9"],c:0},

{q:"4️⃣ If first red, probability second red?",a:["4/9","5/9","1/2","1/3"],c:0},

{q:"5️⃣ Which is more likely?",a:["Two red balls","One blue & one green","Equal"],c:0}

]

const q2=[

{q:"Ana = ?",a:["Doctor","Teacher","Engineer"],c:0},

{q:"Ben = ?",a:["Engineer","Teacher","Doctor"],c:0},

{q:"Cara = ?",a:["Teacher","Doctor","Engineer"],c:0}

]

function shuffle(arr){

return arr.sort(()=>Math.random()-0.5)

}

function nextToStart(){

instructions.classList.add("hidden")
startPage.classList.remove("hidden")

}

function startGame(){

player=playerName.value || "Player"

document.getElementById("bgMusic").play()

startPage.classList.add("hidden")
game1desc.classList.remove("hidden")

shuffle(q1)

}

function startQuestions(){

game1desc.classList.add("hidden")
gameArea.classList.remove("hidden")

loadQuestion()

}

function startGame2(){

game2desc.classList.add("hidden")
gameArea.classList.remove("hidden")

stage=2
current=0

shuffle(q2)

loadQuestion()

}

function startTimer(){

time=10

timer=setInterval(()=>{

time--

timerDiv.innerText="Time: "+time

if(time<=0){

clearInterval(timer)
nextQuestion()

}

},1000)

}

function loadQuestion(){

clearInterval(timer)

let q

if(stage==1){q=q1[current]}else{q=q2[current]}

question.innerText=q.q

let html=""

q.a.forEach((ans,i)=>{

html+=`<button onclick="answer(${i})">${ans}</button>`

})

answers.innerHTML=html

progress.style.width=((current+1)/5*100)+"%"

timerDiv=document.getElementById("timer")

startTimer()

}

function answer(i){

clearInterval(timer)

let q

if(stage==1){q=q1[current]}else{q=q2[current]}

if(i==q.c){

score++

confetti()

}

scoreDiv.innerText="Score: "+score

setTimeout(nextQuestion,500)

}

function nextQuestion(){

current++

if(stage==1 && current>=q1.length){

gameArea.classList.add("hidden")
game2desc.classList.remove("hidden")
return

}

if(stage==2 && current>=q2.length){

finishGame()
return

}

loadQuestion()

}

function finishGame(){

gameArea.classList.add("hidden")
leaderboard.classList.remove("hidden")

saveScore()

showLeaders()

}

function saveScore(){

let scores=JSON.parse(localStorage.getItem("scores"))||[]

scores.push({name:player,score:score})

scores.sort((a,b)=>b.score-a.score)

scores=scores.slice(0,5)

localStorage.setItem("scores",JSON.stringify(scores))

}

function showLeaders(){

let scores=JSON.parse(localStorage.getItem("scores"))||[]

leaders.innerHTML=""

scores.forEach(s=>{

leaders.innerHTML+=`<p>${s.name} - ${s.score}</p>`

})

}

function confetti(){

for(let i=0;i<50;i++){

let div=document.createElement("div")

div.style.position="fixed"
div.style.width="8px"
div.style.height="8px"
div.style.background="yellow"
div.style.left=Math.random()*100+"%"
div.style.top="0"

document.body.appendChild(div)

div.animate([
{transform:"translateY(0)"},
{transform:"translateY(100vh)"}
],{duration:1000})

setTimeout(()=>div.remove(),1000)

}

}
