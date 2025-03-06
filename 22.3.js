let b = prompt("Mời bạn nhập 1 dãy số bất kỳ");
if(b < 0 || b / 1 == NaN){
    console.log("du lieu nhap vao k hop le");
}else{
    let arr = b.split("");
    console.log(arr.reverse().join(""));
    

}