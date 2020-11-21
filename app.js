//team score
//team name
//team runs
var team1={
    name:"Arsenal",
    score:0,
    goals:[]
};
var team2={
    name:"Manchester",
    score:0,
    goals:[]
};
var score=[0,1]
console.log(team1)
console.log(team2)

var toss;

window.onload=()=>{
     selectToss();
     updateName();
     updateButtonText();
     updateScores();
}
function selectToss(){
    toss=Math.round(Math.random())+1
    console.log(toss)
}
function updateName(){
    console.log("team 1 name:"+team1.name);
    console.log("team 2 name:"+team2.name);
    document.getElementById("team1name").textContent=team1.name;
    document.getElementById("team2name").textContent=team2.name;

}
function updateButtonText(){
    var button=document.getElementById("strikebutton")
    if(team1.goals.length==5 && team2.goals.length==5){
         //console.log("Both teams finished their chances");
         button.remove();
         console.log(team1.score===team2.score?"It is a draw":`${team1.score>team2.score?team1.name:team2.name} Wins`)
         finalresult();
    }else{
        toss=
        team1.goals.length===5?2:
        team2.goals.length===5?1:
        toss;
    }
    console.log(`${toss===1?team1.name:team2.name} KICK`)
    document.getElementById("strikebutton").textContent =`${toss===1?team1.name:team2.name} KICK`;
}
function finalresult(){
    var result=document.getElementById("result")
    result.style.visibility=""
    result.textContent=team1.score===team2.score?"it is a draw":`HURRAY!! ${team1.score>team2.score?team1.name:team2.name} WON`
}
strike=()=>{
    //console.log("working")
    var goals=score[Math.floor(Math.random()*score.length)]
    console.log(goals)
    if(toss===1){
        team1.goals.push(goals);
        console.log(goals)
        team1.score=calculateScore(team1.goals)
    }else{
        team2.goals.push(goals);
        console.log(goals)
        team2.score=calculateScore(team2.goals)
    }
    updateButtonText();
    updateScores();
}
function updateScores(){
    console.log("team 1 score:"+team1.score)
    console.log("team 2 score:"+team2.score)
    document.getElementById("team1score").textContent=team1.score;
    document.getElementById("team2score").textContent=team2.score;
    updateGoals();
    
}
function updateGoals(){
    var team1goals=document.getElementById("team1goals").children
    var team2goals=document.getElementById("team2goals").children

    team1.goals.forEach((goal,index)=>{
        team1goals[index].textContent=goal
    });

    team2.goals.forEach((goal1,i)=>{
        team2goals[i].textContent=goal1
    });

}
var calculateScore=(goals)=>{
    return goals.map(num=>{
        return num;
    }).reduce((total,num)=>total+num);
}
