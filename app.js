"use strict"

let input_text=document.querySelector("#inputText")
let input_number=document.querySelector("#inputnumber")
let alert_message=document.querySelector(".alert")
let alert_message1=document.querySelector(".alert1")

let form=document.forms.formValidation
console.log(form);

form.addEventListener("submit",(event)=>{
    event.preventDefault()
        if(input_text.value==""){
          message("Invalid Product name")
        } 
        else if(input_number.value==""){
          message1("Invalid Amount")
        }
        else{




let  InputText=input_text.value
let  Inputnumber=Number(input_number.value.trim())

let billinglist=document.createElement("div")
billinglist.id="billingList"

let productname=document.createElement("h3")
productname.className="productName"
productname.innerHTML=InputText

let productnumber=document.createElement("h3")
productnumber.className="productNumber"
productnumber.innerHTML=Inputnumber

let deletebutton=document.createElement("h4")
deletebutton.className="deleteButton"
deletebutton.innerHTML=``


billinglist.appendChild(productname)
billinglist.appendChild(productnumber)


let billingdiv=document.querySelector("#dommanipulation")

billingdiv.append(billinglist)

let billingdelete=document.querySelectorAll("#deletebtn")
deletebutton.append(billingdelete)


  }
// Alert Message
function message(msg){
    alert_message.innerHTML=msg;
    alert_message.classList.add("red")
    setTimeout(()=>{
       alert_message.innerHTML=""
    },2000)
}
function message1(msg){
 alert_message1.innerHTML=msg;
 alert_message1.classList.add("red")
 setTimeout(()=>{
    alert_message1.innerHTML=""
 },2000)
}

})