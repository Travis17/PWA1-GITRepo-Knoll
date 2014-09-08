/**
 Travis Knoll
 PWA-I Comments on the Fight application.
 7 Sept 2014
 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){                                //create a self-executing function.

    console.log("FIGHT!!!");                //console.log Fight to start the game.

    //player name
    var playerOneName = "Spiderman";        //create variable for player one name.
    var playerTwoName = "Batman";           //create variable for player two name.

    //player damage
    var player1Damage = 20;                 //create variable for player1 damage.
    var player2Damage = 20;                 //create variable for player2 damage.

    //player health
    var playerOneHealth = 100;              //create variable for player one health.
    var playerTwoHealth = 100;              //create varialbe for player two health.

    //initiate round
    var round=0;                            //start first round.

    function fight(){                       //create a function for the two players to fight.
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);   //Alert both players names and execute function.
        for (var i = 0; i < 10; i++)        //desired formula for the game to run.
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;    //player1 determinal damage point.
            var minDamage2 = player2Damage * .5;    //player2 determinal damage point.
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);   //formula to calculate player1 damage.
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);   //formula to calculate player2 damage.

            //inflict damage
            playerOneHealth-=f1;        //variable for player1 health.
            playerTwoHealth-=f2;        //variable for player2 health.

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);  //results of the round stating each player health.

            //check for victor          //create variable to check the winner.
            var result = winnerCheck(); //variable to check for winner.
            console.log(result);        //print result.
            if (result==="no winner")   //create and else if statement if no winner alert result.
            {
                round++;                //round stated with alert of player1 and player2 name and health.
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);          //alert result.
                break;
            };

          };
    };

    function winnerCheck(){             //create a function to go with the variable and check the result.
        var result="no winner";         //variable result no winner created.
        if (playerOneHealth<1 && playerTwoHealth<1) //if statement stating both players as their variables.
        {
            result = "You Both Die";    //if both players die alert you both die.
        } else if(playerOneHealth<1){   //else if created for if player one wins.
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)   //else if created for if player two wins.
        {
            result = playerOneName+" WINS!!!"
        };
       return result;                   //function complete and the result is complete.
    };

    /*******  The program gets started below *******/
    fight();

})();