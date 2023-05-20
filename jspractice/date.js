function getToday(){
let day;
switch (new Date().getDay()){
    case 0:
        day = "sunday";
        break;
        case 1:
            day = "Monday";
            break;  
        case 2:
            day = "Tuesday"; 
            break;
        case 3:
            day = "Wenesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day = "friday";
            break;
        case 6:
            day = "saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;
}
