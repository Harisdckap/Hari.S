"use strict"

let input_text = document.querySelector("#inputText")
let input_number = document.querySelector("#inputnumber")
let alert_message = document.querySelector(".alert")
let alert_message1 = document.querySelector(".alert1")
let totalheading = document.querySelector(".TotalHeading")

let form = document.forms.formValidation

form.addEventListener("submit", (event) => {
    event.preventDefault();

    totalheading.style.display = "block"

    let InputText = input_text.value
    let Inputnumber = Number(input_number.value.trim())

    if (input_text.value == "") {
        message("Invalid Product name")
    } else if (input_number.value == "") {
        message1("Invalid Amount")
    } else {
        input_number.value = ""
        input_text.value = ""

        let billinglist = document.createElement("div")
        billinglist.id = "billingList"

        let productname = document.createElement("h3")
        productname.className = "productName"
        productname.innerHTML = InputText

        let productnumber = document.createElement("h3")
        productnumber.className = "productNumber"
        productnumber.innerHTML = Inputnumber

        let deletebutton = document.createElement("h3")
        deletebutton.className = "deleteButton"
        deletebutton.innerHTML = `<i class="material-icons">&#xe872;</i>`

        billinglist.appendChild(productname);
        billinglist.appendChild(productnumber);
        billinglist.appendChild(deletebutton);


        let billingdiv = document.querySelector("#dommanipulation");
        billingdiv.append(billinglist);


        let totalcalculation = document.getElementById("totalcalculation");

        let total_number = Number(totalcalculation.innerHTML);
        totalcalculation.innerHTML = `${total_number + Inputnumber}`;

        let deletebtnaction = document.querySelectorAll(".deleteButton");

        deletebtnaction.forEach((button) => {
            button.addEventListener("click", (event) => {
                let itemvalue = event.target.parentElement.parentElement.querySelector(".productName").innerHTML;
                let deletedNumber = Number(event.target.parentElement.parentElement.querySelector(".productNumber").innerHTML);

                if (confirm(`you want to delete ${itemvalue}`)) {
                    event.target.parentElement.parentElement.remove();
                    let currentTotal = Number(totalcalculation.innerHTML);
                    totalcalculation.innerHTML = currentTotal - deletedNumber;
                }
            });
        });

        let sorticon = document.querySelector(".sorticon");

        sorticon.addEventListener("click", () => {
             
        });
    }
});

// Alert Message
function message(msg) {
    alert_message.innerHTML = msg;
    alert_message.classList.add("red");
    setTimeout(() => {
        alert_message.innerHTML = "";
    }, 2000);
}
function message1(msg) {
    alert_message1.innerHTML = msg;
    alert_message1.classList.add("red");
    setTimeout(() => {
        alert_message1.innerHTML = "";
    }, 2000);
}







