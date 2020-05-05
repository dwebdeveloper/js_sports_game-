//Below buttons listed: reset, T1button, t2button
const resetButton = document.querySelector("#reset-button");
const teamoneShootButton = document.querySelector("#teamone-shoot-button");
const teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
//Below T1 IDs listed: Shots and Goals
let teamoneNumshots = document.querySelector("#teamone-numshots");
let teamoneNumgoals = document.querySelector("#teamone-numgoals");
//Below T2 IDs listed: Shots and Goals
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamtwoNumgoals = document.querySelector("#teamtwo-numshots");
//Below: response and call of function
teamoneShootButton.addEventListener("click", function () {
    console.log("+ button clicked");
    let t1shots = Number(teamoneNumshots.innerHTML) + 1;
    teamoneNumshots.innerHTML = t1shots;

})
let goal = Math.random();
teamoneShootButton.addEventListener("click", function () {
    if (goal < ) {
        let t1Goals = Number(teamoneNumgoals.innerHTML) + 1;
        teamoneNumgoals = t1Goals;
        console.log("Successful Goal")
    }

})


teamtwoShootButton.addEventListener("click", function () {

    console.log("+ button clicked");
    let t2Shots = Number(teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = t2Shots;
})

resetButton.addEventListener("click", function () {
    console.log("reset complete");

})