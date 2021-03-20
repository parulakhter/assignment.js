//  https://github.com/parulakhter/assignment.js
// (1) Converting kilometers to meters

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(50);
console.log(result);

// (2) Budget Calculator

function budgetCalculator(clock, phone, laptop){
    var budget = 0;
    var clockExpense = clock * 50;
    var phoneExpense = phone * 100;
    var laptopExpense = laptop * 500;
    budget = clockExpense + phoneExpense + laptopExpense;
    return budget;
}
var totalCost = budgetCalculator(10, 2, 1);
console.log(totalCost);

// (3) Calculating hotelCost  

function hotelCost(days){
    var cost = 0;
    if(days <= 10){
        cost = days* 100; 
    }
    else if(days <= 20){
        var firstTenDays = 10 * 100;
        var secondTendays =  (days - 10) * 80;
        cost = firstTenDays + secondTendays;      
    }
    else{
        firstTenDays = 10 * 100;
        secondTendays = 10 * 80
        remainingDays = (days - 20) * 50;
        cost = firstTenDays + secondTendays + remainingDays;
    }
    return cost;
}
var totalCost = hotelCost(20);
console.log(totalCost);

// (4) Finding the largest name/string of an array

function megaFriend(names){
    longestName = "";
    for(var i = 0; i < names.length; i++){
        if(names[i].length > longestName.length){
            longestName = names[i];
        }
    }
    return longestName;
}
var friendsName = ["Monowar", "Panna", "Rimpy", "Shaon", "Nayeem"];
var biggestName = megaFriend(friendsName);
console.log(biggestName);