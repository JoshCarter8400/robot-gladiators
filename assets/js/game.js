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



var fight = function(enemyName) {

    //repeat and execute as long as the enemy robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(

                playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining "
            );


            //Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;


            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left ");
            }
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyName + " attacked" + playerName + "." + playerName + " now has " + playerHealth + " health remaining ");
        };

        //Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left ");
        }


        // If player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you would like to quit?");
        }
        if (confirmSkip) {

            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        } else fight(enemyName);



    }










};
var startGame = function(_beginGame) {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);

        } else {
            console.log(hello);
            window.alert("You have lost your robot in battle! Game Over!");
            break;

        }


    }

};
startGame();
var endGame = function(_closegame) {
    // if player is still alive, player wins!

    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.")
    }

    var playAgainConfirm = window.confirm("Would you like play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

    endGame();
}