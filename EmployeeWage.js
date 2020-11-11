     //UC1 Present or Absent
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10)%2;
if(empCheck == IS_ABSENT){
    console.log("Employee is absent.");
} 
else{
    console.log("Employee is present.");
}

//  UC_6 Store daily wage along with total wage
{
    const IS_PART_TIME = 0;
    const IS_FULL_TIME = 1;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NO_OF_WORKING_DAYS = 20;
    const MAX_HOURS_MONTHLY = 160;
    var employeeDailyWage = new Array();
    function getWorkingHours(employeeCheck) {
        switch (employeeCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    function getWage(workingHours) {
        return workingHours * WAGE_PER_HOUR;
    }
    var employeeHours = 0;
    var employeeWorkingDays = 0;
    while (employeeHours <= MAX_HOURS_MONTHLY && employeeWorkingDays < NO_OF_WORKING_DAYS) {
        employeeWorkingDays++;
        var employeeCheck = Math.floor(Math.random() * 10) % 3;
        employeeHours += getWorkingHours(employeeCheck);
	employeeDailyWage.push(getWage(getWorkingHours(employeeCheck)));    
    }
    var employeeWage = employeeHours * WAGE_PER_HOUR;
    console.log("UC6: \nTotal Working Days : " + employeeWorkingDays);
    console.log("Total Working Hours : " + employeeHours);
    console.log("Employee wage : " + employeeWage);
} 

//Arrays helper functions
//UC_7A Calculate total wage using Array forEach traversal or reduce method
{
var totalWage = 0;
function sum(dailyWage) {
    return totalWage += dailyWage;
}
employeeDailyWage.forEach(sum);
console.log("UC_7A\nTotal Working Days : " + employeeWorkingDays + "\nTotal Working Hours : " + employeeHours + " \nEmployee wage : $" + totalWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC_7A\nEmployee Wage with reduce : " + employeeDailyWage.reduce(totalWages, 0));


//UC_7B Show the Day alongwith Daily wage using Array map helper function
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}
let mapDayWithWageArray = employeeDailyWage.map(mapDayWithWage);
console.log("UC_7B - Daily Wage Map");
console.log(mapDayWithWageArray);

//UC_7C Show Days full time wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC_7C Daily wage when full day worked \n" + fullDayWageArray);

//UC_7D Find first occurrence when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC_7D First time full time wage was earned : " + mapDayWithWageArray.find(findFullTimeWage));

//UC_7E Check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC_7E Check all elements have full time wage : "+mapDayWithWageArray.every(isAllFullTimeWage));

//UC_7F Check if there is any part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC_7F Check if any part time wage : "+mapDayWithWageArray.some(isAnyPartTimeWage));

//UC_7G Find the number of days employee worked
function totalDaysWorked(numberOfDays, dailyWage){
    if(dailyWage>0)
        return numberOfDays+1;
    return numberOfDays;
}
console.log("UC_7G Find number of days employee worked :"+employeeDailyWage.reduce(totalDaysWorked,0));
}
