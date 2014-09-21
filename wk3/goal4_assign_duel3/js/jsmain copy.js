/*
 Travis Knoll
 PWA-I Comments on the Fight application.
 15 Sept 2014
 Assignment 2
 Part 2/3 of series
*/

// self-executing function
(function(){                                //create a self-executing function.

    console.log("FIGHT!!!");                //console.log Fight to start the game.

    //Define the dom pieces; Multiple ways to define and access the HTML.
    var fighter1_txt = document.querySelector("#Sm").querySelector("p"); //pull the name of fighter1 with #.
    var fighter2_txt = document.querySelector("#Bm").querySelector("p"); //pull the name of fighter2 with #.
    var round_txt = document.querySelector("h5"); //pull in the text between the h4 and h5 tags.
    var button = document.getElementById("fight_btn"); //pulls in the main button to start the game.

    console.log();

    //click event...
    button.addEventListener("click", fight, false);


    //create array of objects for 2 fighters.
    var fighters = [
        {
            name:"Spiderman",
            damage:20,
            health:100
        },
        {
            name:"Batman",
            damage:20,
            health:100
        }];

    var round = 1;

    //initialize DOM innerHTML for the top of the html page.
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

    //

   function fight() {
       fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
       fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

       //determine damage
       var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);  //formula to calculate player1 damage.
       var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);   //formula to calculate player2 damage.

       //inflict damage
       fighters[0].health -= f1;
       fighters[1].health -= f2;

       console.log(fighters[0].health, fighters[1].health);

       //check for winner
       var result = winnerCheck();
       console.log(result);

       round_txt.innerHTML = "ROUND #" + round + " Results:";
       round++;
       if (result === "no winner") {
           fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
           fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
       } else {
           fighter1_txt.innerHTML = result;
           fighter2_txt.innerHTML = "";

           //disable button...
           button.removeEventListener("click", fight, false);

           document.querySelector('.buttonblue').innerHTML = 'DONE!'
       }

   }






    function winnerCheck(){             //create a function to go with the variable and check the result.
        var result="no winner";         //variable result no winner created.
        if (fighters[0].health < 1 && fighters[1].health < 1) //if statement stating both players as their variables.
        {
            result = "You Both Die - GAME OVER!";    //if both players die alert you both die.
        } else if(fighters[0].health < 1){   //else if created for if player one wins.
            result = fighters[1].name + " WINS!!!"
        } else if (fighters[1].health < 1)   //else if created for if player two wins.
        {
            result = fighters[0].name + " WINS!!!"
        };
       return result;                   //function complete and the result is complete.
    };



})();