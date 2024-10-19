let numberUse = document.querySelectorAll("#number_use")
let calcInput = document.querySelector("#calc_input")

let calcTeng = document.getElementById("calc_teng")
let clearBtn = document.getElementById("clear_btn")

numberUse.forEach((number) => {
    number.addEventListener('click', () => {
        calcInput.value += number.textContent;       
    })
})
calcTeng.addEventListener("click", () => {
    calcInput.value = eval(calcInput.value)
})
clearBtn.addEventListener("click", () => {
    calcInput.value = null
})