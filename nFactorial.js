// A simple program which takes input as "n" and gives the nfactorial

let 
sum = 0;
n = parseInt(prompt("Enter n: "))

for(let i = 0; i<n; i++){
    sum += (i+1)
}
console.log("Sum of first "+ n + " natural numbers is " +sum)