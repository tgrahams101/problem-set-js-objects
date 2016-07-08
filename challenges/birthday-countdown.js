/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

//input must be in quotations
    function daysUntilDate(dateinput){

    var miliseconds = new Date(dateinput) - Date.now();
    var difference = Math.round(miliseconds / 86400000);
    return difference;
   }

   function birthdayReminder(birthdaypeople){
      reminder = [];
      for (i=0; i<birthdaypeople.length; i++){
        var dateofbirth= birthdaypeople[i].dob.split('/');
        dateofbirth[2]="2016";
        dateofbirthnnow= "'" + dateofbirth[0] + "/" + dateofbirth[1] + "/" + dateofbirth[2] + "'";


        var differencedays = daysUntilDate(dateofbirthnow);
         if (differencedays < 0){
           differencedays +=365;
         }
     var entry=birthdaypeople.name;
         reminder.push(entry)
         console.log(differencedays)
    }
    return reminder;

   }
