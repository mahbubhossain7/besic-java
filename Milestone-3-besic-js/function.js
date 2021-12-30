/*Besic structure of a function

function sayLoveYou(){
    console.log("ada tuni, pada tuni");
    console.log("Baby billi....koi tumi sona");
}
sayLoveYou();*/


/*function with parameter:-

function doubleIt(num){
    var result = num * 2;
    console.log(result);
}
doubleIt(5);
doubleIt(10);
doubleIt(20);
*/

/*function with return:-2ta variable ke ak sathe korar jonno return use kora hoy...jemon 2ta ke ak sathe jog kora,biyog kora ETC

function doubleIt(num){
    var result = num * 2;
    return result;
}

var first = doubleIt(6);
var second = doubleIt(3);
var total = first + second;
console.log(total);
*/

//functione akadik parameter thakte pare,,,
function add(num1, num2)/*akhane 2ta parameter*/{
    var result = num1 + num2;
    return result;
}
var sum = add (4, 7);
console.log(sum);