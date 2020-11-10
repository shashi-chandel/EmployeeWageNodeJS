//UC1 Present or Absent
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10)%2;
if(empCheck == IS_ABSENT){
    console.log("Employee is absent.");
} 
else{
    console.log("Employee is present.");
}

// UC4 : Refactored UC3 Monthly employee wage 
{
    const IS_PART_TIME = 0;
    const IS_FULL_TIME = 1;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NO_OF_WORKING_DAYS = 20;
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
    let employeeHours = 0;
    for (let day = 0; day < NO_OF_WORKING_DAYS; day++) {
        let employeeCheck = Math.floor(Math.random() * 10) % 3;
        employeeHours += getWorkingHours(employeeCheck);
    }
    let employeeWage = employeeHours * WAGE_PER_HOUR;
    console.log("Hours: "+employeeHours+" Employee wage : " + employeeWage);
} 

