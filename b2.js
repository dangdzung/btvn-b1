const n = 40;
let sum = 0;
let i = 1;
while (i <= 40) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
    i++;
}
console.log(sum);
function nto( n){
    for(let i =2;i<=Math.sqrt(n);i++){
        if(n%i==0) return 0;
    }
    return n>1;
}
for(let i=1;i<=50;i++){
    if(nto(i)) console.log(i);
}


