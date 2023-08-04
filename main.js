

let form = document.getElementById("frm");
let formExp = document.getElementById("frm-exp");
let sub = document.getElementById("sub");
let clear = document.getElementById("rst");
let exp = document.getElementById("nxt");
let details = document.createElement("list");
details.setAttribute("id", "dis3-body");
let dvBtn = document.createElement("div")
let btnEdit = document.createElement("button")
let btnDel = document.createElement("button")
dvBtn.append(btnEdit)
dvBtn.appendChild(btnDel)




const submit=()=>{
    let totalIncome = eval(Number(document.getElementById("inp1").value) + Number(document.getElementById("inp2").value) + Number(document.getElementById("inp3").value) + Number(document.getElementById("inp4").value))
    document.getElementById("dis1").innerHTML = "NGN " + totalIncome;
    document.getElementById("dis2").innerHTML = "NGN " + 0;
    sub.style.display = "none";    
    exp.style.display = "block"
       
}

const clr=()=>{

    document.getElementById("inp1").value = " ";
    document.getElementById("inp2").value = " ";
    document.getElementById("inp3").value = " ";
    document.getElementById("inp4").value = " ";
    document.getElementById("dis1").innerHTML = " ";
    document.getElementById("dis2").innerHTML = " ";
    sub.style.display = "block";    
    exp.style.display = "none"
     
}

const next=()=>{

    form.style.display = "none";
    formExp.style.display = "block"
}

const subt=()=>{
    let totalIncome = eval(Number(document.getElementById("inp1").value) + Number(document.getElementById("inp2").value) + Number(document.getElementById("inp3").value) + Number(document.getElementById("inp4").value))
    let expense = Number(document.getElementById("inp6").value)
    document.getElementById("dis2").innerHTML = "NGN " + eval(totalIncome - expense)
}

const rest=()=>{
    document.getElementById("dis1").innerHTML = " ";
    document.getElementById("dis2").innerHTML = " ";
    form.style.display = "block";
    formExp.style.display = "none"

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