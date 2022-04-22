var i=0
const all =["สีแดง","สีน้ำเงิน","สีเขียว","สีเหลือง","สีชมพู","สีขาว","สีดำ","สีทอง","สีม่วง","สีส้ม"]
function a(){
var q = Math.floor(Math.random()*9)
console.log(q)
var r = prompt("อยากเล่นกี่รอบดีละะะ")
var num = 0
while(i==0){
var color=prompt("มาๆๆๆ ลองทายมาสิ!!")
if (color == "red" || color == "สีแดง" || color =="แดง"){
    ans = 0}
else if (color == "blue" || color == "สีน้ำเงิน" || color =="น้ำเงิน"){
    ans = 1}
else if (color == "้green" || color == "สีเขียว" || color =="เขียว"){
    ans = 2}
else if (color == "yellow" || color == "สีเหลือง" || color =="เหลือง"){
    ans = 3}
else if (color == "pink" || color == "สีชมพู" || color =="ชมพู"){
    ans = 4}
else if (color == "white" || color == "สีขาว" || color =="ขาว"){
    ans = 5}
else if (color == "black" || color == "สีดำ" || color =="ดำ"){
    ans = 6}
else if (color == "gold" || color == "สีทอง" || color =="ทอง"){
    ans = 7}
else if (color == "puple" || color == "สีม่วง" || color =="ม่วง"){
    ans = 8}
else if (color == "orange" || color == "สีส้ม" || color =="ส้ม"){
    ans = 9}
else{
    ans=-1}

if(ans==q){
        alert("ถูกต้องแล้วจ้าา เย่ะะ!!")
        num=num+1
        break
    }
    else{  
        alert("ยังไม่ถูกเลย ลองใหม่น้าา")
        r=r-1
        num=num+1
        if(r<1){
            alert("หมดจำนวนรอบแล้ว")
            break
        }
    }

 }
document.getElementById("one").innerHTML = "สีที่ถูกก็คือ"
document.getElementById("answer").innerHTML = all[q]
document.getElementById("two").innerHTML = "เล่นไปทั้งหมด"
document.getElementById("round").innerHTML = num+" รอบ"
}