var disHead = document.createElement("div");
var headText = document.createElement("h3");
var textHead = document.createTextNode("Total Income :");
headText.appendChild(textHead);
disHead.appendChild(headText);
disHead.setAttribute("class", "dis1-head");
document.querySelector("#dis").appendChild(disHead)

console.log(headText)

function submt(){
    console.log(document.getElementById("inp1").value)
    console.log(document.getElementById("inp2").value)
    console.log(document.getElementById("inp3").value)
    console.log(document.getElementById("inp4").value)
    console.log("NGN " + eval(Number(document.getElementById("inp1").value) + Number(document.getElementById("inp2").value) + Number(document.getElementById("inp3").value) + Number(document.getElementById("inp4").value)))
}