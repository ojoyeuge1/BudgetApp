

let form = document.getElementById("form");
let formExp = document.getElementById("form-exp");
let sub = document.getElementById("sub");
let clear = document.getElementById("rst");
let exp = document.getElementById("nxt");





const submit=()=>{
    let totalIncome = eval(Number(document.getElementById("inp1").value) + Number(document.getElementById("inp2").value) + Number(document.getElementById("inp3").value) + Number(document.getElementById("inp4").value))
    document.getElementById("dis1").innerHTML = totalIncome;
    document.getElementById("dis2").textContent = 0
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
let liBtn = document.createElement("div")
let btn1 = document.createElement("button");
let btn1txt = document.createTextNode("edit");
btn1.appendChild(btn1txt);
let btn2 = document.createElement("button");
let btn2txt = document.createTextNode("del")
btn2.appendChild(btn2txt)
liBtn.appendChild(btn1)
liBtn.appendChild(btn2)

const subt =()=>{
    let total = document.getElementById("dis1").textContent;
    let expense = document.getElementById("inp6").value;
    document.getElementById("dis2").textContent = eval(Number(total) - Number(expense));
    let details = document.getElementById("dis3");
    let list = document.createElement("li");
    let tit = document.createTextNode(document.getElementById("inp5").value);
    let sig = document.createTextNode(" - ");
    let amt = document.createTextNode(document.getElementById("inp6").value);
    list.appendChild(tit)
    list.appendChild(sig)
    list.appendChild(amt)
    list.appendChild(liBtn)
    details.appendChild(list)
    document.getElementById("inp5").value = " "
    document.getElementById("inp6").value = " "   
}

const rest=()=>{
    document.getElementById("dis1").innerHTML = " ";
    document.getElementById("dis2").innerHTML = " ";
    document.getElementById("dis3").innerHTML = " ";
    form.style.display = "block";
    formExp.style.display = "none"

}
