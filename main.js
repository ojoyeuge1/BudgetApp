function submit(){
    
    document.getElementById("dis1").innerHTML = "NGN " + eval(Number(document.getElementById("inp1").value) + Number(document.getElementById("inp2").value) + Number(document.getElementById("inp3").value) + Number(document.getElementById("inp4").value))
    document.getElementById("dis2").innerHTML = "NGN " + 0
    document.getElementById("inp1").value = " "
    document.getElementById("inp2").value = " "
    document.getElementById("inp3").value = " "
    document.getElementById("inp4").value = " "
    // var form = document.getElementById("frm")
    // form.style.display = "none"
    // var formExp = document.getElementById("frm-exp")
    // formExp.style.display = "block"
       
}

function clr(){

    document.getElementById("inp1").value = " "
    document.getElementById("inp2").value = " "
    document.getElementById("inp3").value = " "
    document.getElementById("inp4").value = " "
    // document.getElementById("dis1").innerHTML = " "
    // document.getElementById("dis2").innerHTML = " "
     
}

// var disHead = document.createElement("div");
// var headText = document.createElement("h3");
// var textHead = document.createTextNode("Total Income :");
// headText.appendChild(textHead);
// disHead.appendChild(headText);
// disHead.setAttribute("class", "dis1-head");
// document.querySelector("#dis").appendChild(disHead);
// var dis1Inp = document.createElement("div")
// dis1Inp.setAttribute("class", "dis1-body")
// dis1Inp.setAttribute("id", "dis1")
// document.querySelector("#dis").appendChild(dis1Inp)

// console.log(headText)