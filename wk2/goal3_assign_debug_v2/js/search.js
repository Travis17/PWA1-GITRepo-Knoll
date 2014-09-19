//Travis Knoll
//Debug search 2
//16 Sept 2014

// Create privatized scope using a self-executing function
function(){             //create a function to define the search results.

    // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    var resultsDIV = document.getElementById("results");    //variable to see or access the results.
    searchInput = document.forms[0].search;                 //create the variable array search -- : placed.
    currentSearch = "";                                     //current search topic.

    // Validates search query
    var validate = function (query) {                       //validate the new function. corrected

        // Trim whitespace from start and end of search query
        while (query.charAt(0) = " ") {
            query = query.substring(1, query.length);       //while loop created for the string that will be used.
        }
        while (query.charAt(query.length - 1) === "") {
            query = query.substring(0, query.length - 1);   //while loop created for the string that will be used.


            // Check search length, must have 3 characters
            if (query.length < 3) {                         //check the length and alert for too small if equals.
                alert("Your search query is too small, try again.")

                // (DO NOT FIX THE LINE DIRECTLY BELOW)
                searchInput.focus();                        //the required return for the search results.
                return;
            }

            search(query);
        }

        // Finds search matches
        var search = function (query) {                     //create a function for the search needed.

            // split the user's search query string into an array
            var queryArray = [query, search];               //create a array for the search function.

            // array to store matched results from database.js
            var results = [];                               //return the results

            // loop through each index of db array
            for (var i = 0, j = db.length; i < j; i++) {    //for loop created for the length of search and to give results.

                // each db[i] is a single video item, each title ends with a pipe "|"
                // save a lowercase variable of the video title
                var dbTitleEnd = db[i].indexOf('|');        //take the users data and place into the search results.
                var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);

                // loop through the user's search query words
                // save a lowercase variable of the search keyword
                for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {   //loop for the users query
                    var qitem = queryArray[ii].tolowercase();

                    // is the keyword anywhere in the video title?
                    // If a match is found, push full db[i] into results array
                    var compare = dbitem.indexOf(qitem);           //the database of items in the comparison.
                    if (compare !== -1) {
                        results.push(db[i]);
                    }
                }
            }

            results.sort();                                     //results returned to the database and sorted.

            // Check that matches were found, and run output functions
            if (results.length = 0) {                           //if else statement created for the matches in system.
                noMatch();
            } else {
                showMatches(results);                           //reveal results
            }
        }

        // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
        var noMatch = function () {                             //function created for no matches in the html.
            var html = '' +
                '<p>No Results found.</p>' +
                '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>';
            resultsDIV.innerHTML = html;
        }

        // Put matches into page as paragraphs with anchors
        var showMatches = function (results) {              //the results of the function and search.

            // THE NEXT 4 LINES ARE CORRECT.
            var html = '<p>Results</p>',                    //html variable created that relays results.
                title,
                url;

            // loop through all the results search() function
            for (var i = 0, j = results.length; i < j; i++) {   //for loop created for the results.

                // title of video ends with pipe
                // pull the title's string using index numbers
                titleEnd = results[i].indexOf('|');             //video indexed showing the results.
                title = results[i].subString(0, titleEnd);

                // pull the video url after the title
                url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);     //search url results itemized

                // make the video link - THE NEXT LINE IS CORRECT.
                html += '<p><a href=' + url + '>' + title + '</a></p>';     //video link created for the html video link.
            }
            resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
        }

        // The onsubmit event will be reviewed in upcoming Course Material.
        // THE LINE DIRECTLY BELOW IS CORRECT
        document.forms[0].onsubmit = function ()
        var query = searchInput.value;
        validate(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;

    }
}