let score=0
let current=0

const questions=[

{
q:"1️⃣ What is the probability that both balls are red?",
a:["5/10 × 4/9 = 20/90","5/10 × 4/9 = 2/9","5/10 × 5/9 = 25/90","1/5"],
c:1
},

{
q:"2️⃣ What is the probability that the first ball is blue and the second ball is green?",
a:["3/10 × 2/9 = 6/90","3/10 × 2/9 = 1/15","2/10 × 3/9","3/10 × 3/9"],
c:1
},

{
q:"3️⃣ What is the probability that at least one ball is green?",
a:["8/45","17/45","4/9","1/5"],
c:1
},

{
q:"4️⃣ If the first ball is red, what is the probability the second is red?",
a:["4/9","5/9","1/2","3/8"],
c:0
},

{
q:"5️⃣ Which is more likely?",
a:[
"Two red balls",
"One blue and one green (any order)",
"They are equal",
"Impossible"
],
c:0
},

{
q:"6️⃣ Bonus: After adding 1 green ball, what is the probability of at least one green?",
a:[
"15/55",
"24/55",
"6/11",
"3/11"
],
c:1
},

{
q:"7️⃣ Who is the doctor?",
a:[
"Ana",
"Ben",
"Cara",
"Cannot be determined"
],
c:0
},

{
q:"8️⃣ If Ana is Doctor, what is Ben?",
a:[
"Engineer",
"Teacher",
"Doctor",
"Unknown"
],
c:0
},

{
q:"9️⃣ What profession does Cara have?",
a:[
"Teacher",
"Engineer",
"Doctor",
"Scientist"
],
c:0
}

]

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

loadQuestion()
