//besic formula= {n! = (n-1)!*n}

/*Factorial er primary structure/ iteritive method:

var factorial = 1;
for (var i = 1; i <= 10; i++ ){
    factorial = factorial * i
console.log(i, factorial);
}
*/


//Factorial  for loop with function iteritive method :-

function factorial(n){
    var factorial = 1;
    for (var i = 1; i <= n; i++){
   factorial = factorial * i;
    }
   return factorial;
}
var result = factorial(6);
console.log(result);


//factorial with while loop in a function iteritive method :-

function factorial(n){
    
var i = 1;
var factorial = 1;

while (i <= n) {
    factorial = factorial * i;
    i++;
}
return factorial;
}
var result = factorial(3);
console.log(result);



//v.v for intervew Q:-factorial with recursive method :-


for(var i = 10; i>=1; i--){

}


var i = 10;
while(i<=1){

    i--;
}


function factorial(n){
    if(n ==0){
        return 1;
    }
    else{
        return n* factorial(n-1);
    }

 }
  var result = factorial(10);
  console.log(result);

