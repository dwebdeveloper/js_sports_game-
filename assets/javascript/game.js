//Below buttons listed: reset, T1button, t2button
const resetButton = document.querySelector("#reset-button");
const teamoneShootButton = document.querySelector("#teamone-shoot-button");
const teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
//Below T1 IDs listed: Shots and Goals
let teamoneNumshots = document.querySelector("#teamone-numshots");
let teamoneNumgoals = document.querySelector("#teamone-numgoals");
//Below T2 IDs listed: Shots and Goals
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals");
//Below: response and call of function
teamoneShootButton.addEventListener("click", function () {
    console.log("+ button clicked");
    let goal = Math.random();
    let t1shots = Number(teamoneNumshots.innerHTML) + 1;
    teamoneNumshots.innerHTML = t1shots;
    if (goal < .5) {
        let t1Goals = Number(teamoneNumgoals.innerHTML) + 1;
        teamoneNumgoals.innerHTML = t1Goals;
        console.log("Successful Goal");
    }
})

teamtwoShootButton.addEventListener("click", function () {
    let goals = Math.random();
    console.log("+ button clicked");
    let t2shots = Number(teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = t2shots;
    if (goals < .5) {
        let t2Goals = Number(teamtwoNumgoals.innerHTML) + 1;
        teamtwoNumgoals.innerHTML = t2Goals;
        console.log("T2 goals");
    }
})
let numResets = document.querySelector("#num-resets");
resetButton.addEventListener("click", function () {
    console.log("Resets completed")
    let reset = Number(numResets.innerHTML) + 1;
    numResets.innerHTML = reset;

})