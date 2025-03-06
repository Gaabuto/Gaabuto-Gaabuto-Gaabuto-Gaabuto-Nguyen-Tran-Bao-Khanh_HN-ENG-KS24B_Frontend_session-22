let arr = [1,2,3,4,5,6];
let a = 0;
let b = +prompt("Mời bạn nhập 1 số bất kỳ");
if(b < 0 || b / 1 == NaN){
    console.log("du lieu nhap vao k hop le");
}else{
    for(let i = 0; i < arr ; i ++){
        if(arr[i] = b){
            a++;
        }
    }
    if(a =  0){
        console.log("Chúc bạn may mắn lần sau");
    }else{
        console.log("Bingo!");
        
    }
}