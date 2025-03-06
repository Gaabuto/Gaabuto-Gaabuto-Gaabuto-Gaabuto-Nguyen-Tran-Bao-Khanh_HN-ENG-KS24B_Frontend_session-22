let arr=[];
let chan = 0,le = 0;
for(let i = 0 ; i < 5;i++){
    arr[i] = Math.floor(Math.random()*100);
    if(arr[i] % 2 == 0){
        chan += arr[i];
    }else{
        le += arr[i];
    }
}
console.log("Tong so chan la " + chan);
console.log("Tong so chan la " + le);

    
