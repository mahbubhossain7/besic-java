//Besic formula for fibonacci number = {n =(n - 1)+(n -2)}
//As like=fibo[i] = fibo[i-1] + fibo[i-2];
// initial number [0, 1]; Must dite hobe
//fibonacci with iteritive method :-

/*function fibonacci(n){
var fibo = [0,1];
for(var i = 2; i <= n; i++){
fibo[i] = fibo[i-1] + fibo[i-2];
}
return fibo;
}
var result = fibonacci(12);
console.log(result);



//Fibonacci single number output with "Recursive" way,very important for interview Q;-

function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10);
console.log(result);
*/

// Fibonacci series in a Array  with Recursive way :-

function fibonacci(n){
    if(n == 0 ){
        return [0];
    }
    if (n == 1){
        return [0, 1];
    }
    else{
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci(10);
console.log(result);