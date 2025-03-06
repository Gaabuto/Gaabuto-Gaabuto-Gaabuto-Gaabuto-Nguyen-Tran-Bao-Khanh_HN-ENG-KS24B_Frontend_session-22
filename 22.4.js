let b = prompt("Mời bạn nhập 1 dãy số bất kỳ");

if(b < 0 || b / 1 == NaN){
    console.log("du lieu nhap vao k hop le");
}else{
    let max = 0;
    let arr = b.split("");
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(` Số lớn nhât là ${max}`);

    

}