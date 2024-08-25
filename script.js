const convertBtn = document.getElementById("convert-btn")
const myForm = document.getElementById("my-form")
const number = document.getElementById("number")
const output = document.getElementById("output")

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (number.value == "") {
        renderOutput("Please enter a valid number")
    }
    else if (number.value <= 0) {
        renderOutput("Please enter a number greater than or equal to 1")
    }
    else if (number.value >= 4000) {
        renderOutput("Please enter a number less than or equal to 3999")
    }
    else {
        let convertedNum = convertToRoman(parseInt(number.value))
        renderOutput(convertedNum)
    }
})

function renderOutput(msg) {
    output.innerHTML = msg
}
function convertToRoman(num) {
    romanNums = [
        ["M", 1000],
        ["CM", 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ]

    let result = ""
    romanNums.forEach(ele => {
        while (num >= ele[1]) {
            num -= ele[1]
            result += ele[0]
        }
    });
    return result
}