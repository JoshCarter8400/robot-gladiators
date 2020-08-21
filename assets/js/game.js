//Game States
//"WIN" - Player robot has defeated all enemy robots
//  *Fight all enemy robots
//  *Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

var fightOrSkip = function() {
    // ask user if they'd like to fight or skip using function

    var promptFight = window.prompt('Would you like to fight or skip this battle? Enter "FIGHT" or "SKIP" to choose.');
    //Enter the conditional recursive function call here!
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    //If user picks "skip" confirm and stop the loop 
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
        //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes(true), leave the fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playermoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;
            shop();
        }
    }
    return false
}


var fight = function(enemy) {
    // function to generate a random numeric value
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };

    //repeat and execute as long as the enemy robot is alive
    while (enemy.health > 0 && playerInfo.health > 0) {
        if (fightOrSkip()) {
            break;
        }
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //remove enemy's health by subtracting the amount set in the playerAttack variable
            fightOrSkip();
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemyHealth = Math.max(0, enemy.health - damage);
            console.log(

                playerInfo.name + " attacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + " health remaining "
            );


            //Check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                break;


            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left ");
            }
            // remove player's health by subtracting the amount set in the enemyAttack variable
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name + " attacked" + playerInfo.name + "." + playerInfo.name + " now has " + playerInfo.health + " health remaining ");
        };

        //Check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left ");
        }


        // If player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you would like to quit?");
        }
        // if yes (true) leave the fight
        if (confirmSkip) {

            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);

            console.log("playerMoney", playerInfo.money);

            break;

        } else fight(enemy.name);
        return true



    };

}











var startGame = function() {

    //reset player stats
    playerInfo.reset();
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;


    };

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if user wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }

            }
        } else {

            window.alert("You have lost your robot in battle! Game Over!");
            break;

        }


    }


};


var shop = function() {
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    )

    // use switch to carry out action
    debugger;
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store. ");
            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try Again. ");

            // call shop()again to force player to pick a valid option
            shop();
            break;

    }

};
var enemyInfo = [{
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 20,
    reset: function() {
        this.health = 100;
        this.money = 20;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }

    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        }
    }
};
startGame();



var endGame = function() {
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };

    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert(" Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }


};

endGame();
var shop = function() {
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            if (playerInfo.money >= 7) {
                window.alert("Refilling player's health by 20 for 7  dollars");

                //increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
            } else {
                window.alert("You don't have enough Money! ");
            }
            break;
        case "UPGRADE": // new case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars. ");

                //increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
            } else {
                window.alert("You don't have enough money! ");
            }
            break;
        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store. ");
            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try Again. ");

            // call shop()again to force player to pick a valid option
            shop();
            break;

    }
}