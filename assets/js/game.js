var playerName = window.prompt("What is you robot's name");
var playerHealth = 0;
var playerAttack = 10;


var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert user when they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of 'playerAttack' form the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to th econsole so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining "
    );

    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left ");
    }
    //Subtract the value of 'enemyAttack' form the value of 'playerHealth' and use the result to update the value in th e'enemyHealth' variable
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know that it worked 
    console.log(enemyName + " attacked" + playerName + "." + playerName + " now has " + playerHealth + " health remaining ");
};

//Check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left ");
}

fight();