let score = prompt('คะแนนเท่าไรหรอ')
document.getElementById("myscore").innerHTML = score + "  คะแนน"
if (score >= 80 ) {
    document.getElementById("score").innerHTML = "คุณได้เกรด A"
}
else if ( score >= 70 ) {
    document.getElementById("score").innerHTML = "คุณได้เกรด B"
}
else if ( score >= 60 ) {
    document.getElementById("score").innerHTML = "คุณได้เกรด C"
}
else if ( score >= 50 ) {
    document.getElementById("score").innerHTML = "คุณได้เกรด D"
}
else {
    document.getElementById("score").innerHTML = "คุณได้เกรด F"
}
