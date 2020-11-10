//UC1 Present or Absent
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10)%2;
if(empCheck == IS_ABSENT){
    console.log("Employee is absent.");
} 
else{
    console.log("Employee is present.");
}

//  UC_2 Calculating employee wage based on part time or full time work
{
    const IS_PART_TIME = 0;
    const IS_FULL_TIME = 1;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    let employeeHours = 0;
    let employeeCheck = Math.floor(Math.random() * 10) % 2;
    switch (employeeCheck) {
        case IS_PART_TIME:
            employeeHours = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            employeeHours = FULL_TIME_HOURS;
            break;
    }
    let employeeWage = employeeHours * WAGE_PER_HOUR;
    console.log("Employee wage : $" + employeeWage);
} 