let number = [1,2,3,4,5,3,2,1,6,8,5];
let b = +prompt("mời bạn nhập 1 số");
let a = 0;
for(let i = 0; i < number.length; i ++){
    if(arr[i] == b){
        a++;
    }
}
console.log("Số " + b + " xuất hiện" + a + " lần");
