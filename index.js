/////////////////////////////////////////////javascript Task 3//////////////////////////////////////////////////////////////////////

////////////////////Find even and odd numbers in an array////////////////////////
// var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let evennumbers = [];
// let oddnumbers = [];
// for(i=0; i<numberArray.length; i++){
//     if(numberArray[i]%2==0){
//         evennumbers[i] = numberArray[i]; 
//     }
//     else{
//         oddnumbers[i] = numberArray[i];
//     }
// }
// document.writeln("<h1> Even numbers: "+ evennumbers + "</h1><br>");
// document.writeln("<h1> Odd numbers: "+ oddnumbers + "</h1>");

////////////////////Push even numbers in even array and odd numbers in odd array////////////////////////

var evennumberss = [];
var oddnumbers = [];
for(i=1; i<=20;i++){
    if(i%2===0){
        evennumberss.push(i);
    }
    else{
        oddnumbers.push(i);
    }
}
document.writeln("<h1> Even numbers: "+ evennumberss + "</h1><br>");
document.writeln("<h1> Odd numbers: "+ oddnumbers + "</h1>");
