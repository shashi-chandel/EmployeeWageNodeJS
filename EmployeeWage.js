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
    let employeeDailyWage = new Array();
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
    let employeeHours = 0;
    let employeeWorkingDays = 0;
    while (employeeHours <= MAX_HOURS_MONTHLY && employeeWorkingDays < NO_OF_WORKING_DAYS) {
        employeeWorkingDays++;
        let employeeCheck = Math.floor(Math.random() * 10) % 3;
        employeeHours += getWorkingHours(employeeCheck);
	employeeDailyWage.push(getWage(getWorkingHours(employeeCheck)));    
    }
    let employeeWage = employeeHours * WAGE_PER_HOUR;
    console.log("Total Working Days : " + employeeWorkingDays);
    console.log("Total Working Hours : " + employeeHours);
    console.log("Employee wage : " + employeeWage);
} 


