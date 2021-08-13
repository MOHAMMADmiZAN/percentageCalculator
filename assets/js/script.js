let result = document.querySelector('.percentageResult')
let firstValue = document.querySelector('#firstValue')
let percent = document.querySelector('#Percentage')
let submit = document.querySelector('#percentageButton')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (firstValue.value === '' || percent.value === '') {
        swal({
            title: " Data Field Empty ",
            text: "Please Provide Your Valuable Data",
            icon: "error",
        });
    } else {
        let x = Number.parseFloat(firstValue.value)
        let y = Number.parseFloat(percent.value)
        // x = x / 100
        result.innerHTML = `${x/100*y}`
    }

})




