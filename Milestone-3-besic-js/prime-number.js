

//prime number ber korar jonno dap somuho :-

var n = 20;

for (i = 2; i < n - 1; i++) {
//   console.log(i, n % i);
  if(n % i == 0){
      console.log('Not a prime number');
      break;
  }
}
console.log("your number is a prime number");



// Done prime number justify with function :-

function isPrime(n) {
for (i = 2; i < n; i++) {
    if (n % i == 0){
        return "not a  prime number";
    }
}
    return "your number is a prime number";
}
var result = isPrime(2);
console.log(result);