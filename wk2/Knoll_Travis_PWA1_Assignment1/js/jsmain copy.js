/*
 Travis Knoll
 PWA-I Updated code and comments...
 19 Sept 2014
 Assignment 3
 Part 3/3 of series
*/

// self-executing function
(function(){                                //create a self-executing function.

    console.log("FIGHT!!!");                //console.log Fight to start the game.

    //initiate round

var playerOne = {name: 'Spiderman', damage: 20, health: 100};
var playerTwo = {name: 'Batman', damage: 20, health: 100};

    function fight(){









        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = myArray[2] * .5;    //player1 determinal damage point.
            var minDamage2 = myArray[2] * .5;    //player2 determinal damage point.
            var f1 = Math.floor(Math.random()*(myArray[2]-minDamage1)+minDamage1);   //formula to calculate player1 damage.
            var f2 = Math.floor(Math.random()*(myArray[2]-minDamage2)+minDamage2);   //formula to calculate player2 damage.

            //inflict damage
            myArray[3]-=f1;        //variable for player1 health.
            myArray[3]-=f2;        //variable for player2 health.

            console.log(myArray[0]+": "+myArray[3] + " " + myArray[1]+":"+myArray[3]);  //results of the round stating each player health.

            //check for victor          //create variable to check the winner.
            var result = winnerCheck(); //variable to check for winner.
            console.log(result);        //print result.
            if (result==="no winner")   //create and else if statement if no winner alert result.
            {
                round++;                //round stated with alert of player1 and player2 name and health.
                alert(myArray[0]+":"+myArray[3]+"  *ROUND "+round+" OVER"+"*  "+myArray[1]+":"+myArray[3]);

            } else{
                alert(result);          //alert result.
                break;
            };

          };
    };

    function winnerCheck(){             //create a function to go with the variable and check the result.
        var result="no winner";         //variable result no winner created.
        if (myArray[3]<1 && myArray[3]<1) //if statement stating both players as their variables.
        {
            result = "You Both Die";    //if both players die alert you both die.
        } else if(myArray[3]<1){   //else if created for if player one wins.
            result =myArray[1]+" WINS!!!"
        } else if (myArray[3]<1)   //else if created for if player two wins.
        {
            result = myArray[1]+" WINS!!!"
        };
       return result;                   //function complete and the result is complete.
    };

    /*******  The program gets started below *******/
    fight();

})();