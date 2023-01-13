const cardCvc = document.querySelector('.cvc')
const cardNumber = document.querySelector('.number')
const cardName = document.querySelector('.name')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const nameInput = document.querySelector('.holderName input')
const numberInput = document.querySelector('.holderNumber input')
const monthInput = document.querySelector('.cardMonth input')
const yearInput = document.querySelector('.cardYear input')
const cvcInput = document.querySelector('.cardCvc input')
const submitBtn = document.querySelector('.btn')
const error = document.querySelector('.right-section .error')
const complete = document.querySelector('.thank')
const confirmBtn = document.querySelector('.thankBtn')
const form = document.querySelector('form')
submitBtn.addEventListener('click', e => {
    e.preventDefault()
    // validate()
    if (!nameInput.value) {
        nameInput.classList.add('error')
        nameInput.parentElement.classList.add('error_message')
    }
    else {
        nameInput.classList.remove('error')
        nameInput.parentElement.classList.remove('error_message')
    }
    if (!numberInput.value) {
        numberInput.classList.add('error')
        numberInput.parentElement.classList.add('error_message')
    }
    else if (numberInput.value.length < 16) {
        numberInput.classList.add('error')
    } else {
        numberInput.classList.remove('error')
        numberInput.parentElement.classList.remove('error_message')
    }
    if (!monthInput.value) {
        monthInput.classList.add('error')
        monthInput.parentElement.classList.add('error_message')
    }
    else {
        monthInput.classList.remove('error')
        monthInput.parentElement.classList.remove('error_message')
    }
    if (!yearInput.value) {
        yearInput.classList.add('error')
        yearInput.parentElement.classList.add('error_message')
    }
    else {
        yearInput.classList.remove('error')
        yearInput.parentElement.classList.remove('error_message')
    }
    if (!cvcInput.value) {
        cvcInput.classList.add('error')
        cvcInput.parentElement.classList.add('error_message')
    }
    else {
        cvcInput.classList.remove('error')
        cvcInput.parentElement.classList.remove('error_message')
    }
    if (nameInput.value && numberInput.value && monthInput.value && yearInput.value && cvcInput.value && numberInput.value.length == 16) {
        complete.classList.remove('hide')
        form.classList.add('hide')
    }
})

confirmBtn.addEventListener('click', ()=>{
    setTimeout(function(){
        location.reload()
    },800)
})

nameInput.addEventListener('keyup', () => {
    cardName.innerText = nameInput.value;
})
numberInput.addEventListener('keyup', () => {
    cardNumber.innerText = numberInput.value;
})
monthInput.addEventListener('keyup', () => {
    month.innerText = monthInput.value;
})
monthInput.addEventListener('keyup', () => {
    month.innerText = monthInput.value;
})
yearInput.addEventListener('keyup', () => {
    year.innerText = yearInput.value;
})
cvcInput.addEventListener('keyup', () => {
    cardCvc.innerText = cvcInput.value
})