/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```




  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE

var input = "haha";
var string=input.replace(/[^A-Z0-9]/ig,"").toLowerCase().split('');
var stringlength= string.length;
var uniquelist = [];
var listobject = {};

for  (i=0; i<stringlength; i++){
     if (uniquelist.indexOf(string[i]) < 0){
         uniquelist.push(string[i]);
     }
}

for (i=0; i< uniquelist.length; i++){
     for (a=0; a<string.length; a++){
       if (uniquelist[i]==string[a]){
  // //       listobject.uniquelist[i] = 1;    I'M NOT SURE HOW TO CREATE AN OBJECT FROM THESE ELEMENTS...THIS IS
  // MY ATTEMPT AT DOING SO
         console.log(uniquelist[i]);
       }
     }
}
