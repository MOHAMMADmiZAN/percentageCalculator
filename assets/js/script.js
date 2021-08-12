let result = document.querySelector('.percentageResult')
let firstValue = document.querySelector('#firstValue')
let percent = document.querySelector('#Percentage')
let submit = document.querySelector('#percentageButton')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (firstValue.value === '' || percent.value === '') {
        alert('input all filled')
    } else {
        let x = Number.parseFloat(firstValue.value)
        let y = Number.parseFloat(percent.value)
        // x = x / 100
        result.innerHTML = `${x/100*y}`
    }

})




