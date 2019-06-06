/* 
Program will determine the actual and ideal hours of sleep for each night of the last week.
Will calculate, in hours, how far you are from your weekly sleep goal.
*/

/*
create a function that returns any given night's number of hours of rest. 
Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.
*/

// function should accept a day as argument and return no. of hours you slept that night.

// let getSleepHours = (day) => {
//     switch(day) {
//         case "monday":
//             return 8
//             break;
//         case "tuesday":
//             return 7
//             break;
//         case "wednesday":
//             return 8
//             break;
//         case "thursday":
//             return 8
//             break;
//         case "friday":
//             return 7
//             break;
//         case "saturday":
//             return 8
//             break;
//         case "sunday":
//             return 8
//             break;
//         default:
//             return "Error!" 
//     }
// };

// get total sleep hours you actually slept, get ideal sleep hours, calculate sleep debt, if any.
// use implicit return syntax, 'auto returns'
let getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
// single line block, implicit return
let getIdealSleepHours = idealHours => idealHours * 7;
// use to test -> console.log(getActualSleepHours());
// If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
// If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
// If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.
let calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(9);

    if (actualSleepHours === idealSleepHours) {
        console.log(`You got the perfect amount of sleep this week! An average of ${idealSleepHours} hours a day!`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`This week you slept more than your ideal sleep hours! ${actualSleepHours - idealSleepHours} hours over to be exact!`);
    } else {
        console.log(`This week you were ${idealSleepHours - actualSleepHours} hours short of your goal!`);
    }
};

calculateSleepDebt();

