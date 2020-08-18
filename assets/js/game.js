//Game States
//"WIN" - Player robot has defeated all enemy robots
//  *Fight all enemy robots
//  *Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less
var playerName = window.prompt("What is you robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];


var enemyHealth = 50;
var enemyAttack = 12;
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
var fight = function(enemyName) {
    //Alert user when they are starting the round
    window.alert("Welcome to Robot Gladiators!");




    // If a player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(

            playerName + " attacked " + enemyNames + "." + enemyNames + " now has " + enemyHealth + " health remaining "
        );


        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died! ");

        } else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left ");
        }
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyNames + " attacked" + playerName + "." + playerName + " now has " + playerHealth + " health remaining ");
    };

    //Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left ");
    }


    // If player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you would like to quit?");
    }
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    } else {


    }



}
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}