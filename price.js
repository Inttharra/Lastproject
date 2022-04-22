var price = Number(prompt("ซื้อของมาราคาเท่าไหร่หรออ"))
var item = Number(prompt("ซื้อมากี่ชิ้นหรออ"))
var total = 0
for(let i = 0 ; i < item ; i++){
    total += price
    console.log(total)
    document.getElementById("p").innerHTML = price + "  บาท"
    document.getElementById("i").innerHTML = item + "  ชิ้น"
    document.getElementById("t").innerHTML = total + "  บาท"
}