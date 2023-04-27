console.log("Hello World!\n==========\n");

// Exercise 1 Section

function printOdds(count) {
    for(let i = 1; i <= Math.abs(count); i++){
        if (i % 2 != 0) {
            console.log(i * Math.sign(count));
        }
    }
}

printOdds(-10);
printOdds(100);

// Exercise 2 Section

function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You are old enough to drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${ 16 - age} year(s) until you can drive. `;
    
    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}

// Exercise 3 Section

function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }
}

// Exercise 4 Section

function isTiangleValid(x, y, z) {
   return x + y > z && x + z > y && y + z > x;
}

function checkTriangle(x, y, z) {
    let isValid = isTiangleValid(x, y, z);
    if (isValid) {
        if (x == y && y == z) {
            return `Equilateral`;
        }   else if (x == y || y == z || x == z) {
            return `Isosceles`;
        }   else {
            return `Scalene`;
        }
    }       else {
        return `Not a valid triangle.`;
    }
}

// Exercise 5 Section

function dataUsageFeedback(planLimit, day, usage) {

    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;


    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "Exceeding"
    } else if (currentAvg < projectedAvg) {
      statusMsg = "At";
    }
    console.log(`You are ${statusMsg} your average daily use (${currentAvg} GB/day), continuing this usage, you will end up using ${planLimit
        - (usage + projectedUsage)
            
    }GB from your data limit.`);
    
}

